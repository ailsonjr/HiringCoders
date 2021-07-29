import React, { useState } from 'react';
import axios from 'axios';
import * as S from "./styled";
import { useHistory } from "react-router-dom";

function Home(pros) {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [repos, setRepos] = useState([]);
  const url = `https://api.github.com/users/${user}/repos`;

  function handleSearch() {
    const repositoriesName = [];
    axios.get(url).then(res => setRepos(res.data))
      .then(() => {
        repos.map(repo => repositoriesName.push(repo.name));
      })
    console.log(repositoriesName)
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    history.push('/repositories');
  }

  return (
    <S.Container >
      <h1>Enter a github user</h1>
      <S.Input className="userInput" placeholder="User" value={user} onChange={e => setUser(e.target.value)} />
      <S.Button type="button" onClick={handleSearch}>Search</S.Button>
      <h2>Repositories</h2>
      <div>
        {
          repos.length > 0 ? repos.map(repo => <p>{repo.name}</p>) : ''
        }
      </div>
    </S.Container>
  );
}

export default Home;
