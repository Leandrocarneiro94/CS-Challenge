import { useParams, Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import {Avatar, Results, UserInfo, UserInfoContainer, LinkRepo, LinkVoltar, LinkWrapper, NotFoundText, UserNotFound} from './User.styled'

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

    // -----------------------------------------------------

    const [userCheck, setUserCheck] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            const resposta = await fetch(`${url}/${username}`);
            if (resposta.status === 404) {
                setUserCheck(false);
            } else {
                const dados = await resposta.json();
                setUser(dados);
            }
        }

        getUsers();
    },[])

    // -----------------------------------------------------

    return (
        <Results>
            <UserInfoContainer>
                {userCheck ? (
                    <>                        
                        <Avatar src={user?.avatar_url}/>

                        <UserInfo>
                            <p>User: {username}</p>

                            <p>Followers: {user?.followers}</p>

                            <p>Following: {user?.following}</p>
                            
                            {user?.email ? (
                                <p>E-mail: {user?.email}</p>
                                ) : (
                                    <NotFoundText>E-mail: Não encontrado </NotFoundText>
                                )}

                            {user?.bio ? (
                                <p>Bio: {user?.bio}</p>
                                ) : (
                                    <NotFoundText>Bio: Não encontrado </NotFoundText>
                                )}

                            <LinkWrapper>
                                <LinkRepo>  
                                    <Link to={`/users/${username}/repos`}>
                                        <p>Ver Repositórios</p>
                                    </Link>
                                </LinkRepo>

                                <LinkVoltar>
                                    <Link to='/'>
                                        Voltar
                                    </Link>
                                </LinkVoltar>
                            </LinkWrapper>                    
                        </UserInfo>
                    </>
                ) : (
                    <UserNotFound>
                        <p>O usuário não foi encontrado.</p>

                        <LinkVoltar>
                            <Link to='/'>
                                Voltar
                            </Link>
                        </LinkVoltar>
                    </UserNotFound>
                )}
            </UserInfoContainer>
        </Results>
    );
}
    
//     return (
//         <Results>
//             <Link to="/">
//                 Voltar
//             </Link>

//             <Avatar src={user?.avatar_url}/>

//             <p>User: {user?.name}</p>

//             <p>Bio: {user?.bio}</p>

//             <p>E-mail: {user?.email}</p>

//             <p>Followers: {user?.followers}</p>

//             <p>Following: {user?.following}</p>

//         	<Link to={`/users/${username}/repos`}>
//                 <p>Lista de Repositórios</p>
//             </Link>

//         </Results>
//     )
// }

export default User
