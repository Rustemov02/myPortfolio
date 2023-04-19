import React from 'react'
import { Stack, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'
import Inform from './Inform'

export default function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      common: {
        black: '#000',
        white: '#fff'
      },
      primary: {
        light: '#42a5f5',
        main: '#1976d2',
        dark: '#1565c0',
        constrastText: '#fff'
      },
      secondary: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
        constrastText: '#fff'
      },
      background: {
        paper: '#fff',
        custom: '#0c2235'
      }
    },
    typography: {
      fontFamily: [
        'Roboto',
        'Arial',
        'sans-serif',
      ].join(','),
      primary: {
        main: '#0c2235'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Stack>
          <Navbar />
          <Inform/>
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  )
}