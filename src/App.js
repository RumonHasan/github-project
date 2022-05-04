import React,{createContext, useState, useEffect} from 'react';
import './style.css';
// ui imports

// components
import SearchBar from './components/SearchBar';
import axios from 'axios';
import UserCard from './components/UserCard';
import { AppBar, Toolbar } from '@mui/material';

export const GithubContext = createContext();
export const URL = `https://api.github.com/users/`

const App = () => {
  const [githubUser, setGithubUser] = useState('rumonhasan'); // default value
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});

  // fetching all the userData from github API;
  useEffect(()=>{
    setIsLoading(true);
      // fetching all the user data
    const fetchAllData = ()=>{
      axios.get(`${URL}${githubUser}`).then((response)=>{
      setUserData(response.data);
      })
    }
    fetchAllData();
    return (()=>{
      setIsLoading(false);
    })
  },[githubUser]);

  return (
    <div>
    <AppBar>
      <Toolbar>
        
      </Toolbar>
    </AppBar>

      <GithubContext.Provider value={{
        githubUser, setGithubUser
      }}>
          <SearchBar/>
          <UserCard/>
      </GithubContext.Provider>
    </div>
  
  )
}

export default App;
