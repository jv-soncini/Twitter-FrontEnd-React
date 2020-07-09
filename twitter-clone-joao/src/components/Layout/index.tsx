import React from 'react';

import Main from '../Main'

import SideBar from '../SideBar'

import MenuBar from '../MenuBar/index' 

import { Container, Wrapper } from './style';

const Layout: React.FC = () => {
  return (
      <Container>
        <Wrapper>
             <MenuBar/> 
            <Main/>
             <SideBar/>  
        </Wrapper>
      </Container>
  )
} 

export default Layout;