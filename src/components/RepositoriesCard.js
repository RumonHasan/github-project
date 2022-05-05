import React, {useContext, useState} from 'react';
import { GithubContext } from '../App';
import '../styles/repositoryCard.css';
import { ArrowDownward } from '@mui/icons-material';

 const RepositoriesCard = () => {
  const {repositories, displayRepositories, repoShow, displayRepoOptions} = useContext(GithubContext);
  console.log(repositories);

  // pagination
  const [reposPerPage, setReposPerPage] = useState(5);
  const [currentReposPage, setCurrentReposPage] = useState(1);
  const pagesArray = [];

  const lastIndexRepo = reposPerPage * currentReposPage;
  const firstIndexRepo = lastIndexRepo - reposPerPage;
  const paginatedRepos = repositories.slice(firstIndexRepo, lastIndexRepo);

  console.log(paginatedRepos);
  // populating page numbers
  for(let i = 1; i <= Math.ceil(repositories.length / reposPerPage); i++){
      pagesArray.push(i);
  };
  const paginate = (pageNumber)=>{
      setCurrentReposPage(pageNumber);
  }

  return (
    <div className='repo_card'>
        <h1 className='repo_header' onClick={displayRepositories}>{repoShow ? `Repositories: ${repositories.length}`: `Show Repos`}</h1>
        <ul className='list'>
            {paginatedRepos?.map((repo, index)=>{
                const {name, created_at, url, id} = repo;
                return (
                    <li key={id} className='list_item'>
                        <h1>{name}</h1>
                        <ArrowDownward className='optionArrow' onClick={displayRepoOptions}></ArrowDownward>
                    </li>
                )
            })}
        </ul>
        <div className='pages'>
            {pagesArray.map((pageNumber, index)=>{
                return (
                    <div key={index} className='pageNumber' onClick={()=>paginate(pageNumber)}>
                        {pageNumber}
                    </div>
                )
            })}
        </div>
    </div>
  )
};

export default RepositoriesCard;
