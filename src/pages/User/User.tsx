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

    useEffect(() => {
        const loadUser = async () => {
            const response = await fetch(`${url}/${username}`)
            const dados = await response.json()
            setUser(dados)
        }

        loadUser()
    }, [])

    const [userCheck, setUserCheck] = useState(true);

    useEffect(() => {
        const loadUsers = async () => {
            const resposta = await fetch(`${url}/${username}`);
            if (resposta.status === 404) {
                setUserCheck(false);
            } else {
                const dados = await resposta.json();
                setUser(dados);
            }
        }

        loadUsers();
    }, [])

    return (
        <Results>
                {userCheck ? (
                    <>                
                        <UserInfo>
                            <Avatar src={user?.avatar_url}/>

                            <p>User: {user?.name}</p>

                            <p>Followers: {user?.followers}</p>

                            <p>Following: {user?.following}</p>
                            
                            {user?.email ? (
                                <p>E-mail: {user?.email}</p>
                                ) : (
                                    <p>E-mail: Not found </p>
                                )}

                            {user?.bio ? (
                                <p>Bio: {user?.bio}</p>
                                ) : (
                                    <p>Bio: Not found </p>
                                )}

                            <Link to={`/users/${username}/repos`}>
                                <p>Repositories</p>
                            </Link>

                            <Link to='/'>
                                Back to Home
                            </Link>                 
                        </UserInfo>
                    </>
                ) : (
                    <UserNotFound>
                        <p>User not found.</p>

                        <Link to='/'>
                            Back to Home
                        </Link>
                    </UserNotFound>
                )}
        </Results>
    );
}

export default User
