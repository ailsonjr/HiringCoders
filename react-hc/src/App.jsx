import React, { useState } from 'react';
import axios from 'axios';

function App(pros) {
  const [user, setUser] = useState('');
  const url = `https://api.github.com/users/${user}/repos`;

  function handleSearch() {
    axios.get(url).then(res => console.log(res.data));
  }

  return (
    <>
      <input className="userInput" placeholder="User" value={user} onChange={e => setUser(e.target.value)} />
      <button type="button" onClick={handleSearch}>Search</button>
    </>
  );
}

export default App;
