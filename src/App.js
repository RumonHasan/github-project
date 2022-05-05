import React,{createContext, useState, useEffect} from 'react';
import './style.css';
// ui imports
import { AppBar, Toolbar } from '@mui/material';
// components
import SearchBar from './components/SearchBar';
import axios from 'axios';
import UserCard from './components/UserCard';
// styles
import { mainContainer } from './styles/mainStyles';

export const GithubContext = createContext();
export const URL = `https://api.github.com/users/`

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [searchValue, setSearchValue] = useState('');

  const handleSubmitName = async ()=>{
    try{
      if(!searchValue) return;
      if(searchValue){
        const response = await axios.get(`${URL}${searchValue}`);
        setUserData(response.data);
      }
    }catch(err){
      console.log(err);
    }
  }
  console.log(userData);

  return (
    <div style={mainContainer}>
     <GithubContext.Provider value={{
        searchValue, setSearchValue, handleSubmitName,
        userData
      }}>
      <AppBar>
        <Toolbar>
          <SearchBar/>
        </Toolbar>
      </AppBar>
        <UserCard/>
      </GithubContext.Provider>
    </div>
  
  )
}

export default App;
