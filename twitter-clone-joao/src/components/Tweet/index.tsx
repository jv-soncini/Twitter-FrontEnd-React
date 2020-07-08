import React from 'react';


import { 
    Container, 
    Retweetd,
    AmazonIcon,
    Body, 
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon


} from './style';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweetd>
              <AmazonIcon />
              Você retweetou
          </Retweetd>

          <Body>
              <Avatar />
              <Content>
                  <Header>
                      <strong>Joao Soncini</strong>
                      <span>@JoaoSoncinho</span>
                      <Dot/>
                      <time>08 de julho</time>
                  </Header>

                  <Description> Um tweet aleatório </Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          355
                      </Status>
                      <Status>
                          <RetweetIcon />
                          787
                      </Status>
                      <Status>
                          <LikeIcon />
                          900
                      </Status>

                
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;