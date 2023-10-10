import { Container, SearchButton, SearchField, SearchWrapper } from './Home.styled'
import React from "react"

const Home = () => {    
  const [searchTerm, setSearchTerm] = React.useState('leandrocarneiro94')

  return (
    <Container>
      <SearchWrapper>
        <SearchField 
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text" 
          placeholder="Pesquisar Usuário" 
          value={searchTerm} 
        />

        <SearchButton to={`/users/${searchTerm}`}>
          Pesquisar
        </SearchButton>

      </SearchWrapper>
    </Container>
  )
}

export default Home
