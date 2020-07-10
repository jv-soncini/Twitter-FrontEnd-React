import React from 'react';

import StickyBox from "react-sticky-box";

import List from "../List";

import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

import {
    Container,
    SearchInput,
    SearchIcon,
    SearchWrapper,
    Body
} from "./style"



 const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar No Twitter"  />
              <SearchIcon />
          </SearchWrapper>

             <StickyBox>
                <Body>
                  <List  
                  title="talvez voce curta"
                  elements={[
                      <FollowSuggestion
                        name="Gabriel schosdcoiusabd"
                        nickname="@Scchisdsd"
                        />,
                        <FollowSuggestion
                        name="Pedro, ta, mas e o queiroz?"
                        nickname="@Cade?"
                        />,
                        <FollowSuggestion
                        name="Amador desumilde?"
                        nickname="@Logicamente"
                    />]}
                    />

                <List  
                    title="talvez voce curta"
                    elements={[
                    <News />,
                    <News />,
                    <News />,
                    <News />,   
                    ]}
                    />

                <List  
                    title="talvez voce curta"
                    elements={[
                    <News />,
                    <News />,
                    <News />,
                    <News />,   
                    ]}
                    />
                

                </Body>
                </StickyBox>
      </Container>
  );
}

export default SideBar;

