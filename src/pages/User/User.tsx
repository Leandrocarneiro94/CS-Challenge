import { useParams, Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { Results, UserInfo, Avatar, UserNotFound } from './User.styled'

const url = 'https://api.github.com/users';

const User = () => {
    const {username} = useParams();

    const [user, setUser] = React.useState<{ 
        name: string, 
        avatar_url: string, 
        followers: number, 
        following: number, 
        email: string, 
        bio: string,
        repos_url: string,
    }>()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadUsers = async () => {
            const resposta = await fetch(`${url}/${username}`);
            if(resposta.ok) {
                const dados = await resposta.json();
                setUser(dados);
            }
            setIsLoading(false)
        }

        loadUsers();
    }, [username])

    return (
        <Results>
            {isLoading && <p>Carregando...</p>}

            {!user && !isLoading && (
                <UserNotFound>
                    <p>User not found.</p>

                    <Link to='/'>
                        Back to Home
                    </Link>
                </UserNotFound>
            )}

            {user && (
                <UserInfo>
                    <Avatar src={user.avatar_url}/>

                    <p>User: {user.name}</p>

                    <p>Followers: {user.followers}</p>

                    <p>Following: {user.following}</p>
                    
                    <p>E-mail: {user.email || 'Not found'}</p>

                    <p>Bio: {user.bio || 'Not found'}</p>

                    <Link to={`/users/${username}/repos`}>
                        Repositories
                    </Link>

                    <Link to='/'>
                        Back to Home
                    </Link>                 
                </UserInfo>
            )}
        </Results>
    );
}

export default User
