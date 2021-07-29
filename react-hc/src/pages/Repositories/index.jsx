import React, { useEffect, useState } from 'react';
import * as S from './styled';

function Repositories() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepos(repositoriesName);
  }, []);

  return (
    <S.Container>
      <S.Title>Repositories</S.Title>
      <S.List>
        {repos.map(repo => {
          return (
            <S.ListItem>{repo}</S.ListItem>)
        }
        )
        }
      </S.List>
    </S.Container>

  );
}

export default Repositories;
