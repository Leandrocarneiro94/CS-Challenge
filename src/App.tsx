import React from "react"
import {Container } from './App.styled'
import GlobalStyle from "./config/GlobalStyle"
import Home from "./pages/Home/Home"

function App() {
  

  return (
    <Container>
      <GlobalStyle />
      <Home />
    </Container>
  )
}

export default App
