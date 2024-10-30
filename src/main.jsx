import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    width: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
    background: #181818;
  }

  a {
    text-decoration: none;
    color: inherit;
    line-height: 1;
    cursor: pointer;
  }

  li {
    list-style-type: none;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
