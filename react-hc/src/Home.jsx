import React, { useState } from 'react';
import axios from 'axios';

function Home(pros) {
  const [user, setUser] = useState('');
  const [repos, setRepos] = useState([]);
  const url = `https://api.github.com/users/${user}/repos`;

  function handleSearch() {
    axios.get(url).then(res => setRepos(res.data));
  }

  return (
    <>
      <h1>Enter a github user</h1>
      <input className="userInput" placeholder="User" value={user} onChange={e => setUser(e.target.value)} />
      <button type="button" onClick={handleSearch}>Search</button>
      <h2>Repositories</h2>
      <div>
        {
          repos.length > 0 ? repos.map(repo => <p>{repo.name}</p>) : ''
        }
      </div>
    </>
  );
}

export default Home;
