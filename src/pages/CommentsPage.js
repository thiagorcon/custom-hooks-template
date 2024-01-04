
import {Title,PostContainer } from '../style'
import { Card } from '../components/Card/Card'

import useRequestData from "../hooks/UseRequestData";


const  CommentsPage = () => {
  const [postagens,isLoading] = useRequestData('comments')

  return (
    <div>
      <Title>Comentários dos usuários</Title>
      <PostContainer>
       {isLoading && <p>Carregando...</p>}
       {!isLoading && postagens.length > 0 && postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      {/* se o setData no UseRequest extiver sem nada ou com [] o código abaixo funciona  */}
      {!isLoading && postagens.length == 0 && <p>Lista vazia</p>}
      </PostContainer>
    </div>
  );
}

export default CommentsPage;



