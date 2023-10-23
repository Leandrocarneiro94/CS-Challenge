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

        {repoDetails.description ? (
            <p>Description: {repoDetails.description}</p>
            ) : (
            <p>Description: Not Found</p>
        )}

        {repoDetails.language ? (
            <p>Language: {repoDetails.language}</p>
                ) : (
            <p>Language: Not Found</p>
        )}

            <p>&#9733;: {repoDetails.stargazers_count}</p>

        <Link to={repoDetails.html_url}> Github</Link>

        <Link to={`/users/${username}/repos`}>
            Back to Repositories
        </Link>
    </Container>
  );
};

export default RepoDetails;
