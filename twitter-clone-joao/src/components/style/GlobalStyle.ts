import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      color: var(--white)
  }
  html, body, #root {
      max-height: 100vh;
      max-width: 100vw;

      width: 100%;
      height: 100%;
  }






  *, button, input {
      border: 0;
      background: none;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  html {
      background: var(--primary);
  }
:root {
    --primary: #000;
    --second: #17151c;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7a7a7a;
    --outline: #2f3336;
    --retweet: #00c06b;                                 
    --like: #e8265e;
    --twitter: #794bc4;
    --twitter-dark-hover: #0e0013;
    --twitter-light-hover: #794bc4ad;
}
`;
