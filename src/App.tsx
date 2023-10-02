import {Container } from './App.styled'
import GlobalStyle from "./config/GlobalStyle"
import Router from "./router/Router"

function App() {
  

  return (
    <Container>
      <GlobalStyle />
      <Router />
    </Container>
  )
}

export default App
