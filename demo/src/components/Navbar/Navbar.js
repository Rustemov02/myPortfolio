import { Stack} from '@mui/material'
import React from 'react'
import Header from './Header'
import Intro from './Intro'
export default function Navbar() {
 

  return (
    <Stack id='home'  bgcolor='#072e4f' height='660px' borderColor="red" > 
      <Header />
      <Intro /> 
    </Stack>
  )
}