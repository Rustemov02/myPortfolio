import { Stack, Typography, Button } from '@mui/material'
import React from 'react'
import bgImg from './images/bg_image.jpg'
import Header from './Header'
import Intro from './Intro'

export default function Navbar() {

  const styles = {
    backImage: {
      backgroundImage: `url(${bgImg})`,
      backgroundPosition: "center",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      filter: 'brightness(20%)',
      height: "100vh",
      display : 'flex' ,
      flexDirection  : "row" ,
      alignItems : 'center',
      justifyContent : 'center'
    }
  }

  return (
    <Stack direction='column' >

      <Stack sx={styles.backImage}>
      </Stack>

      <Header />
        <Intro/>


    </Stack>
  )
}