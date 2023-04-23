import { Stack, Typography, Box, Button } from '@mui/material'
import React from 'react'
import './Inform.css'
import me from './images/me.png'
export default function Inform() {

    const typographyStyle = {
        fontFamily: 'Poppins',
        color: '#EDEDED',
        fontWeight: 600,
    }
    const customImg = {
        width: '100%',
        minWidth: '210px',
        borderRadius: '12px'
    }

    return (
        <Stack position='relative' borderColor='#FFFFFF'  direction='row-reverse' py={5} px={3} alignItems='center' justifyContent='space-evenly' flexWrap='wrap'>

            <Box sx={{ width: '25%', minWidth: '250px'}}>
                <img src={me} style={customImg} />
            </Box>

            <Stack width='50%' minWidth={200} direction='column' alignItems='flex-start' gap={2} px={5} py={3}>
                <Typography sx={typographyStyle} fontSize={19} >Benjamin Rustamov</Typography>
                <Typography fontSize={32} sx={typographyStyle}>&lt;Front End Developer /&gt; </Typography>

                <Stack width='auto' gap={2} >
                    <Typography sx={{ ...typographyStyle, color: "#87929b" }}>I design and build quality responsive websites, clean user interaces, and rich interactive web apps. I am seeking React, Javascript, and other web development opportunities.</Typography>
                    <Typography sx={{ ...typographyStyle, color: "#87929b" }}>Open to remote freelance opportunities, contract jobs, and full time work. I like to learn new things, solve problems, and create innovative web solutions.</Typography>

                </Stack>
                <Button variant='contained' sx={{ padding: '16px', marginTop: '12px', borderRadius: '20px', backgroundColor: "#29b8ff", color: '#0c2235' }}>See my work</Button>
            </Stack>



            <Box className='heroEmail'> bunyamin2002@mail.ru </Box>
        </Stack>
    )
}