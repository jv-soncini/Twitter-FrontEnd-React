import React from 'react';
 import {Container, Banner, Avatar, ProfileData, Location, IconCake, FollowAge, EditButton} from './style'

 import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              < Avatar />
          </Banner>

          <ProfileData>
               <EditButton outlined>Editar perfil</EditButton> 

               <h1>João Soncini</h1>
               <h2>@JoaoSoncinho</h2>

               <p>
                   Não sei o que escrever <a href="cansado.com.br">@Senai</a> me da uma força
               </p>

               <ul>
                   <li>
                       <Location />
                       São Paulo, Brasil
                   </li>
               </ul>

               <ul>
                   <li>
                       <IconCake />
                        Nascido em 5 de fevereiro de 2003
                   </li>
               </ul>

               <FollowAge>
                   <span>
                       seguindo <strong>32</strong>
                   </span>
                   <span>
                       <strong>54 </strong> seguidores 
                   </span>
               </FollowAge>
          </ProfileData>

          <Feed/>
      </Container>
  );
}

export default ProfilePage;