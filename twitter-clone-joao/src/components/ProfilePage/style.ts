import styled,{ css } from 'styled-components';

import { LocationOn, Cake } from "../style/icons"


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none
    }
`;


export const Banner = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(33vh, 199px);

    background: var(--twitter);

    position: relative;
`;
export const Avatar = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid var(--primary);
    background: var(--gray);
    border-radius: 50%;

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
    
`;
export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 10px 0;

    display: flex;
    flex-direction: column;

    position: relative;

    >h1 {
        font-weight: bold;
        font-size: 19px;
    }
    > h2 {
        font-weight: normal;
        font-size: 15px;

        color: var(--gray);
    }

    > p {
        font-size: 15px;
        margin-top: 11px;
    > a {
        text-decoration: none;
        color: var(--twitter);
    }
}

 > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
        font-size: 15px;
        color: var(--gray);

        > svg {
            fill: var(--gray);
            margin-right: 5px;
        }
    }
 }
`;

 const IconCSS = css`
    width: 20px;
    height:20px;

    color: var(--gray)
 `;

export const Location = styled(LocationOn)`${IconCSS}`;
export const IconCake = styled(Cake)`${IconCSS}`;

export const FollowAge = styled.div`
    display: flex
`;