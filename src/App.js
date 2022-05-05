import React,{createContext, useState, useEffect} from 'react';
import './style.css';
import axios from 'axios';
// ui imports
import { AppBar, Toolbar } from '@mui/material';
// components
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import RepositoriesCard from './components/RepositoriesCard';
// styles
import { mainContainer } from './styles/mainStyles';

export const GithubContext = createContext();
export const URL = `https://api.github.com/users/`

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [repoURL, setRepoURL] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [repoShow, setRepoShow] = useState(false);

  const handleSubmitName = async ()=>{
    try{
      if(!searchValue) return;
      if(searchValue){
        const response = await axios.get(`${URL}${searchValue}`);
        setRepoShow(false);
        setRepositories([]);
        setUserData(response.data);
        setRepoURL(response.data.repos_url.toString());
        setSearchValue('');
      }
    }catch(err){
      console.log(err);
    }
  }

  const displayRepositories = async ()=>{
    try{
        const response = await axios.get(`${repoURL}`);
        setRepositories(response.data);
        setRepoShow(true);
        }catch(err){
          console.log(err);
    }
  }

  const displayRepoOptions = ()=>{

  }

  return (
    <div style={mainContainer}>
     <GithubContext.Provider value={{
        searchValue, setSearchValue, handleSubmitName,
        userData, repositories, setRepositories, displayRepositories, 
        repoShow, displayRepoOptions
      }}>
      <AppBar>
        <Toolbar>
          <SearchBar/>
        </Toolbar>
      </AppBar>
        <UserCard/>
        <RepositoriesCard/>
      </GithubContext.Provider>
    </div>
  
  )
}

export default App;
