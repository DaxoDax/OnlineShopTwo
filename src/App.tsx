import React from 'react';
import { Container, createTheme, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Catalog from './features/Catalog/Catalog';
import Header from './Header';
import { Product } from './Product';

const products: Array<Product> = [
  {
    id: 1,
    name: 'Marko',
    description: 'abc',
    price: 150000,
    pictureURL: 'http://picsum.photos/200',
    type: 'efgh',
    brand: 'merc',
    quantityInStock: 2,
  },
  {
    id: 2,
    name: 'Bata',
    description: 'efg',
    price: 190000,
    pictureURL: 'http://picsum.photos/200',
    type: 'ijl',
    brand: 'bmw',
    quantityInStock: 3,
  },
  {
    id: 3,
    name: 'Kreso',
    description: 'hjl',
    price: 200000,
    pictureURL: 'http://picsum.photos/200',
    type: 'hjl',
    brand: 'yugo',
    quantityInStock: 4,
  },
];

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  });
  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container>
          <Catalog products={products} />
        </Container>
      </ThemeProvider>
    </>
  );
};
export default App;
