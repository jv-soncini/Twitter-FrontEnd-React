import styled, { css } from 'styled-components';

import { HomeCircle, BellOutline, Comment, FavoriteBorder, Person, ExitToApp, Amazon   } from "../style/icons"



export const Container = styled.div`
    display: none;

    @media(min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    position: sticky;
    top: 0; 
    left: 0;

    padding: 9px 19px 20px;
    max-height: 100vh;

    overflow-y: auto;

`;
export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1280px) {
        align-items: flex-start;
    }
`;
export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    > span {
        display: none;
    }

    @media (min-width: 1280px) {
       > span {
            display: inline;
            margin-left: 19px;
            font-weight: bold;
            font-size: 19px;

        }
            padding-right: 15px;

            &:hover{
        background: var(--twitter-dark-hover);
    }
    }

    padding: 8.25px 0;
    outline: 0;

    & + button{
        margin-top: 16.5px;
    }

    & + button:last-child {
        margin-top: 33px;

        width: 40px;
        height: 40px;

        >span {
            display: none;
        }
    @media (min-width: 1280px) {
        width: 100%;
        height: unset; 

        > span {
            display: inline;
        }

        
    }
 }

    cursor: pointer;
    border-radius: 25px;

    

    &:hover, &.active {
        span, svg {
            color: var(--twitter);
            fill: var(--twitter);
        }
    }

`;

const IconCSS = css`
    height: 30px;
    width: 30px;
`;

export const Logo = styled(Amazon)`
    height: 41px;
    width: 41;

    path {
        fill: var(--twitter);
    }

    margin-bottom: 20px;
`;
export const HomeIcon = styled(HomeCircle)`${IconCSS}

`;
export const BellIcon  = styled(BellOutline)`${IconCSS}

`;
export const EmailIcon = styled(Comment)`${IconCSS}

`;
export const FavoriteIcon = styled(FavoriteBorder)`${IconCSS}

`;
export const ProfileIcon = styled(Person)`${IconCSS}

`;

export const BotSide = styled.div`

`;
export const Avatar = styled.div`

`;
export const ProfileData = styled.div`

`;
export const ExitIcon = styled.div`

`;

