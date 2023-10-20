import { Container, SearchButton, SearchField, SearchWrapper } from './Home.styled'
import React from "react"

const Home = () => {    
  const [searchTerm, setSearchTerm] = React.useState('leandrocarneiro94')

  return (
    <Container>
      <SearchWrapper>
        <SearchField 
          type="text" 
          placeholder="Nome de usuário" 
          value={searchTerm} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          autoFocus
        />

        <SearchButton to={`/users/${searchTerm}`}>
          Pesquisar
        </SearchButton>
      </SearchWrapper>
    </Container>
  )
}

export default Home
