import React from 'react'
import { Stack, Typography, Box, Button } from '@mui/material'
import preview from './images/preview.jpg'
import './Profil.css'
import { GitHub, LinkedIn, Telegram } from '@mui/icons-material'

export default function Profil() {
    const customBox = {
        width: '380px',
        minWidth: '250px',
        height: '380px',
        transition: '0.7s',
        '&:hover': { transform: "rotate(-10deg)" }
    }
    const backStyle = {
        position: 'relative',
        width: 'fit-content',
        minWidth: '250px',
        height: '100%',
        margin: ' 50px auto',
        borderRadius: '12px',
        background: 'linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%);'
    }
    const customImg = {
        width: '100%',
        height: '100%',
        minWidth: '210px',
        borderRadius: '12px',
        transform: 'rotate(10deg)',
    }
    const customIcon = {
        color : '#4DB5FF',
        transition : '0.4s',
        cursor: 'pointer',
        '&:hover':{
            color : '#FFF'
        }
    }


    return (
        <Stack py={5}>
            <Stack gap={1} alignItems='center'>
                <Typography fontFamily='Poppins' fontSize={20} color='#FFFFFF' fontWeight={600}>Hello I'm</Typography>
                <Typography fontFamily='Poppins' fontSize={44} color='#FFFFFF' fontWeight={600}>Benjamin</Typography>
                <Typography fontFamily='Poppins' fontSize={18} color='#FFFFFF99' fontWeight={500}>Front End Developer</Typography>

                <Stack direction='row' gap={2} my={2}>
                    <Button size='medium' variant='outlined' sx={{ textTransform: 'capitalize', fontSize: '18px', '&:hover': { backgroundColor: "#FFF", color: 'black' } }}>Download CV</Button>
                    <Button size='medium' variant='contained' sx={{ color: '#1F1F38', fontSize: '18px', backgroundColor: '#4DB5FF', textTransform: 'capitalize', '&:hover': { backgroundColor: "#FFF", color: 'black' } }} >Let's Talk</Button>
                </Stack>
            </Stack>


            <Stack display='none' direction='row' alignItems='center' width='70%' margin="auto" justifyContent='space-between' py={4}>

                <Stack direction='column' gap={2} sx={{'&:after':{content: '""',margin : 'auto' ,width : '2px',height : '2rem' ,background : '#4db5ff'}}}>
                    <GitHub sx={customIcon}/>
                    <LinkedIn  sx={customIcon}/>
                    <Telegram sx={customIcon}/>
                </Stack>

                <Stack sx={{ ...backStyle}}>
                    <Box sx={customBox}>
                        <img src={preview} style={customImg} />
                    </Box>
                </Stack>

                <Stack>
                    <Typography sx={{...customIcon , transform : 'rotate(90deg)'}}>Scroll Down</Typography>
                </Stack>

            </Stack>


        </Stack>
    )
}