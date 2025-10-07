import React, { useState, useEffect } from 'react'
import { Stack, Button , ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Projects from './components/Project/Projects'
import Contact from './components/Contact/Contact'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import Nav from './components/Navbar/Nav'
import Experience from './components/Experience/Experience'
import { HashLoader } from 'react-spinners' 
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init({
  duration: 1200,
  once : true
});



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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
 

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <HashLoader color="#36d7b7" />
        </div>
      ) : (
        <Stack bgcolor='#0c2235'>
          <Navbar /> 
          <Nav /> 
          <AboutMe />
          <Experience />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </Stack>
      )}
    </ThemeProvider>
  )
}