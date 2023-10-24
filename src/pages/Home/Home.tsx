import { Container, SearchWrapper, SearchField, SearchButton  } from './Home.styled'
import React from "react"

const Home = () => {    
  const [searchTerm, setSearchTerm] = React.useState('leandrocarneiro94')

  return (
    <Container>
      <SearchWrapper>
        <SearchField 
          type="text" 
          placeholder="Username"
          aria-label='username'
          id="username"
          value={searchTerm} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          autoFocus
        />

        <SearchButton to={`/users/${searchTerm}`}>
          Estou com sorte
        </SearchButton>
      </SearchWrapper>
    </Container>
  )
}

export default Home
