import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { Container, Title, FilterContainer, FilterWrapper } from "./Repos.styled.ts";
import { url } from '../../constants';

type Repository = {
  id: number;
  name: string;
  stargazers_count: number;
};

const Repos = () => {
  const {username} = useParams()

  const [repos, setRepos] = useState<Repository[]>([]);

  const [ordenacao, setOrdenacao] = useState('desc');

  useEffect(() => {
    const getRepos = async () => {
      const resposta = await fetch(`${url}users/${username}/repos`);

      const dados: Repository[] = await resposta.json();

      const reposOrdenados = [...dados];
      if (ordenacao === 'asc') {
          reposOrdenados.sort((a, b) => a.stargazers_count - b.stargazers_count);
          } else {
            reposOrdenados.sort((a, b) => b.stargazers_count - a.stargazers_count);
          }

      setRepos(reposOrdenados);
    };

    getRepos();
  }, [username, ordenacao]);

  const handleOrdernar = (ordem: 'asc' | 'desc') => {
    setOrdenacao(ordem);
  };

  return (
    <Container>
      <Title>Repositories</Title>

      <FilterContainer>
          <p>Filter by Stars:</p>

          <FilterWrapper>
              <button onClick={() => handleOrdernar('asc')}>
                Ascending Order 
              </button>

              <button onClick={() => handleOrdernar('desc')}>
                Descending Order
              </button>
          </FilterWrapper>
      </FilterContainer>

      {repos.map((repo) => (
        <Link to={`/users/${username}/repos/${repo.name}`}>
            {repo.name} &#9733; {repo.stargazers_count}
        </Link>
      ))}           

      <Link to={`/users/${username}`}>
        Back to User
      </Link>
    </Container>
  )
}

export default Repos;
