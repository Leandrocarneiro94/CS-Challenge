import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Title } from "./ReposDetails.styled";

const url = 'https://api.github.com/';

const RepoDetails = () => {
  const { username, repoId } = useParams();

  const [repoDetails, setRepoDetails] = useState({
    name: '',
    description: '',
    stargazers_count: 0,
    html_url: '',
    language: '',
  });

  useEffect(() => {
    const fetchRepoDetails = async () => {
        const response = await fetch(`${url}repos/${username}/${repoId}`);
        const data = await response.json();
        setRepoDetails(data);
    };

    fetchRepoDetails();
  }, [username, repoId]);

  return (
    <Container>
        <Title>Repository Details</Title>

        <p>Name: {repoDetails.name}</p>

        <p>Description: {repoDetails.description || 'Not found'}</p>

        <p>Language: {repoDetails.language || 'Not found'}</p>

        <p>&#9733;: {repoDetails.stargazers_count}</p>

        <a href={repoDetails.html_url} target='_blank'> Github</a>

        <Link to={`/users/${username}/repos`}>
            Back to Repositories
        </Link>
    </Container>
  );
};

export default RepoDetails;
