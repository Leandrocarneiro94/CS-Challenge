import { Container, SearchButton, SearchBar, SearchWrapper } from './Home.styled'
import React from "react"

const Home = (): JSX.Element => {
    
    const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <Container>
      <SearchWrapper>
        <SearchBar 
          type="text" 
          placeholder="Pesquisar" 
          value={searchTerm} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
        <SearchButton to={`/users/${searchTerm}`}>
          Pesquisar
        </SearchButton>
      </SearchWrapper>
    </Container>
  )
}

export default Home
