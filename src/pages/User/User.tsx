import { useParams, Link } from "react-router-dom"
import React, { useEffect } from 'react'
import { Results, Avatar } from "./User.styled";

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

    console.log(username)
    return (
        <Results>
            <Link to="/">
                Voltar
            </Link>

            <Avatar src={user?.avatar_url}/>

            <p> User: {user?.name}</p>

            <p> Bio: {user?.bio}</p>

            <p> E-mail: {user?.email}</p>

            <p> Followers: {user?.followers}</p>

            <p> Following: {user?.following}</p>

        	<Link to={`/${user?.repos_url}`}>
                <p>Lista de Repositórios</p>
            </Link>

        </Results>
    )
}

export default User
