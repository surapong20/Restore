
import { Container } from '@mui/material';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import Catalog from '../../catalog/Catalog';

import Header from './Header';



export default function App() {
  const [mode,setMode] = useState(false)

  const displayMode = mode? 'dark' : 'light'

  const darkTheme = createTheme({
    palette: {
      mode: displayMode
    }
  })

  const handleModel=()=>setMode(!mode)
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Header handleMode = {handleModel}/>
          <Container>
        <Catalog/>
      </Container>
    </ThemeProvider>
    </>
  );
}


