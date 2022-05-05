import React,{useCallback, useContext} from 'react';
import { TextField } from '@mui/material';
import { GithubContext } from '../App';

const SearchBar = () => {
  const {searchValue, setSearchValue, handleSubmitName} = useContext(GithubContext);
  const handleSearch = useCallback(
    (e)=>{
      setSearchValue(e.target.value)
    },[searchValue]
  );
  return (
    <div>
      <input value={searchValue} onChange={handleSearch}
        placeholder='Enter Name'
      />
      <button onClick={handleSubmitName}>Search</button>
    </div>
  )
};
export default SearchBar;
