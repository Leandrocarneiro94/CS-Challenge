import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const url = 'https://api.github.com/';

const RepoDetails = () => {
  const { id, repoId } = useParams();

  const [repoDetails, setRepoDetails] = useState({
    name: '',
    description: '',
    stargazers_count: 0,
    html_url: '',
    language: ''
  });

  useEffect(() => {
    const fetchRepoDetails = async () => {
        const response = await fetch(`${url}repos/${id}/${repoId}`);
        const data = await response.json();
        setRepoDetails(data);
    };

    fetchRepoDetails();
  }, [id, repoId]);

  return (
    <div>
      <Link to={`/users/${id}/repos`}>Voltar</Link>

      <h2>Detalhes do Repositório</h2>

      <p>Nome: {repoDetails.name}</p>

      {repoDetails.description ? (
        <p>Descrição: {repoDetails.description}</p>
            ) : (
                <p>Descrição: Sem descrição</p>
        )}

      <p>Estrelas: {repoDetails.stargazers_count}</p>
      {repoDetails.language ? (
            <p>Linguagem: {repoDetails.language}</p>
            ) : (
                <p>Linguagem: Não especificado</p>
        )}

      <a href={repoDetails.html_url}> Abrir no Github</a>
    </div>
  );
};

export default RepoDetails;
