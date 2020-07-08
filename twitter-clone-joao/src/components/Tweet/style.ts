import styled from 'styled-components';

import {Chat, Favorite, Amazon } from '../../components/style/icons'

 
  export const  Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 14px 16px;

    border-bottom: 1px solid var(--outline);

    max-width: 100%
  
  `;
  export const  Retweetd  = styled.div`
    display: flex;
    align-items: center;

    font-size: 13px;
    color: var(--gray);
  `;

  export const  AmazonIcon = styled(Amazon)`
    width: 16px;
    height: 16px;

    margin-left: 35px;
    margin-right: 9px;

    > path{
        fill: var(--gray);
        }
  `;
  export const  Body = styled.div`
        display: flex;
        margin-top: 3px;
        position: relative;

  `;
  export const  Avatar = styled.div`
        height: 49px;
        width: 49px;
        border-radius: 50%;
        flex-shrink: 0;
        background: var(--gray)
  `;
  export const  Content = styled.div`
        
        display: flex;
        flex-direction: column;
                                             
        width: 100% 
  `;
  export const  Header = styled.div``;
  export const  Dot = styled.div``;
  export const  Description = styled.div``;
  export const  ImageContent = styled.div``;
  export const  Icons = styled.div``;
  export const  Status = styled.div``;
  export const  CommentIcon = styled.div``;
  export const  RetweetIcon = styled.div``;
  export const  LikeIcon = styled.div``;




 