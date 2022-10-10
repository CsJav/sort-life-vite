import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import About from './Scenes/About';
import Start from './Scenes/Stats';
import './index.css';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/About" element={<About />} />
          <Route path="/Start" element={<Start />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals();