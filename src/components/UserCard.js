import React,{useContext} from 'react';
import { GithubContext } from '../App';
import '../styles/card.css';

const UserCard = () => {
  const {userData} = useContext(GithubContext);
  console.log(userData);
  // user information basics
  const userName = userData.login;
  const avatar = userData.avatar_url;
  const bio = userData.bio;
  const fans = {
    followers: userData.followers,
    following: userData.following
  };
  const publicRepos = userData.public_repos;// contains the public repo count

  return (
    <React.Fragment>
      {userData &&
        <div>
        <div className='card'>
          <div className='cardContainer'>
              <div className='cardHeaders'>
                  <img className='avatar' src={avatar ? avatar: 'Not Available'}/>
                  <h1>{userName}</h1>
              </div>
              <div className='cardContents'>
                  <h5>Description:{bio}</h5>
                  <h5>Followers: {fans.followers}</h5>
                  <h5>Following: {fans.following}</h5>
                  <h5>Public Repositories: {publicRepos}</h5>
              </div>
          </div>
        </div>
      </div>
      }
    </React.Fragment>
  )
};

export default UserCard;
