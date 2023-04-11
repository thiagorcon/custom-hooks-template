import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants/constants";
import axios from "axios";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useCapturarNome } from "./hooks/useCapturarNome";
import { useCapturarPostagem } from "./hooks/useCapturarPostagem";
import { useRequestData } from "./hooks/useRequestData";
function App() {
  
  // const nomeUsuarios = useCapturarNome()

  // const postagens = useCapturarPostagem()

  const [nomeUsuarios, isLoadingNomes, isErrorNome] = useRequestData(`${BASE_URL}users`, [])
  const [postagens] = useRequestData(`${BASE_URL}comments`, [])

  const renderNomes = nomeUsuarios.map((usuario) => {
    return (
    <Card 
    key={usuario.id} 
    text={usuario.name} 
    backgroudColor={'nome'}
    textColor={'nome'}
    /> )
  })

  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Title>Nomes dos usuários</Title>
      <NameContainer>
          {isLoadingNomes && <p>Carregando</p>}
          {!isLoadingNomes && isErrorNome && <p>Ocorreu um erro</p>}
          {!isLoadingNomes && nomeUsuarios && nomeUsuarios.length > 0 && renderNomes}
          {!isLoadingNomes && !isErrorNome && nomeUsuarios && nomeUsuarios.length === 0 && <p>Lista Vazia</p>}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>

      {postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default App;



