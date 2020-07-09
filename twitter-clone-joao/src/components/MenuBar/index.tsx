import React from 'react';

import { Container, Topside, Logo, MenuButton, HomeIcon, BellIcon , EmailIcon, FavoriteIcon, ProfileIcon, BotSide, Avatar, ProfileData, ExitIcon } from './style';

import TweetButton from "../Button/index"

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo />

              <MenuButton>
                  <HomeIcon />
                  <span>Pagina inicial</span> 
              </MenuButton>

              <MenuButton>
                  <BellIcon />
                  <span>Notificações</span> 
              </MenuButton>

              <MenuButton>
                  <EmailIcon />
                  <span>Mensagens</span> 
              </MenuButton>

              <MenuButton>
                  <FavoriteIcon />
                  <span>Favoritas</span> 
              </MenuButton>

              <MenuButton className="active">
                  <ProfileIcon />
                  <span>Perfil</span> 
              </MenuButton>

              <TweetButton>
                  <span>Tweetar</span>
              </TweetButton>
          </Topside>

          <BotSide>
              <Avatar />

              <ProfileData>
                  <span>Joao Soncini</span>
                  <span>@JoaoSoncinho</span>
              </ProfileData>

              <ExitIcon />
          </BotSide>
      </Container>
  );
}

export default MenuBar;