import React from 'react'
import { Stack, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './Navbar'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Skills from './Skills'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'
import Profil from './Profil'
import AboutMe from './AboutMe'
import Footer from './Footer'
import Nav from './Nav'
import Experience from './Experience'
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
        <Stack bgcolor='#0c2235'>
          <Routes>
            <Route path='/home' element={<Navbar />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/portfolio' element={<Profil />} />
            <Route path='/contact' element={<Contact />} /> 
          </Routes>  
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  )
}