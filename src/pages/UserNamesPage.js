
import {Title,NameContainer } from '../style'
import { Card } from '../components/Card/Card'

import useRequestData from "../hooks/UseRequestData";


const UserNamesPage = () => {
  
  const [nomeUsuarios,isLoading] = useRequestData('users')

  return (
    <div>
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && nomeUsuarios.length > 0 && nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
        {/* se o setData no UseRequest extiver sem nada ou com [] o código abaixo funciona  */}
        {!isLoading && nomeUsuarios.length == 0 && <p>Sem usuários</p>}
      </NameContainer>
    </div>
  );
}

export default  UserNamesPage;



