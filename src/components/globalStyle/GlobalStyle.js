import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/bg.jpeg';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'New Tegomin', serif;
    color: #332c36;
    background: url(${bgImg}) center no-repeat;
    background-size: cover;
  }
`;
