import { Container, SearchButton, SearchBar, SearchWrapper, ResultsList, Results } from './Home.styled'

type lista = [
    {
        nome: string;
        id: string;
    },
    {

    },
]

function Home() {
  
  return (
    <Container>
      <SearchWrapper>
        <SearchBar type="text" placeholder="Pesquisar"/>
        <SearchButton type="submit">
          Pesquisar
        </SearchButton>
      </SearchWrapper>
      <ResultsList>
        <Results>oi</Results>
      </ResultsList>
    </Container>
  )
}

export default Home
