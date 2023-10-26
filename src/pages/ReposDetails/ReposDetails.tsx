import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Title } from "./ReposDetails.styled";
import { url } from '../../constants';

type RepoData = {
  name: string,
  description: string,
  stargazers_count: number,
  html_url: string,
  language: string,
}

const RepoDetails = () => {
  const { username, repoId } = useParams();

  const [repoDetails, setRepoDetails] = useState<RepoData>();

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

        <p>Name: {repoDetails?.name}</p>

        <p>Description: {repoDetails?.description || 'Not found'}</p>

        <p>Language: {repoDetails?.language || 'Not Found'}</p>
              
        <p>&#9733; {repoDetails?.stargazers_count}</p>

        <a target='blank' href={repoDetails?.html_url}> Github</a>

        <Link to={`/users/${username}/repos`}>
            Back to Repositories
        </Link>
    </Container>
  );
};

export default RepoDetails;
