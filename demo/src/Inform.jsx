import { Stack, Typography, Box, Button } from '@mui/material'
import React from 'react'
import myImg from './images/myImage.jpeg'

export default function Inform() {

    const typographyStyle = {
        fontFamily: 'Poppins',
        color: '#EDEDED',
        fontWeight: 600
    }
    const customImg = {
        width : '350px',
        borderRadius : '12px'
    }

    return (
        <Stack bgcolor='#0c2235' direction='row' py={5} alignItems='center' justifyContent='space-evenly'>

            <Stack direction='column' alignItems='flex-start' gap={2} border={1} px={5}>
                <Typography sx={typographyStyle} fontSize={19} >Benjamin Rustamov</Typography>
                <Typography fontSize={32} sx={typographyStyle}>&lt;Front End Developer /&gt; </Typography>

                <Stack width={800} gap={2} >
                    <Typography sx={{ ...typographyStyle, color: "#87929b" }}>I design and build quality responsive websites, clean user interaces, and rich interactive web apps. I am seeking React, Javascript, and other web development opportunities.</Typography>
                    <Typography sx={{ ...typographyStyle, color: "#87929b" }}>Open to remote freelance opportunities, contract jobs, and full time work. I like to learn new things, solve problems, and create innovative web solutions.</Typography>

                </Stack>
                <Button variant='contained' sx={{ padding: '16px', marginTop: '12px', borderRadius: '20px', backgroundColor: "#29b8ff", color: '#0c2235' }}>See my work</Button>
            </Stack>

            <Box>
                <img src={myImg} style={customImg} />
            </Box>

            {/* <Box><Typography>bunyamin2002@mail.ru</Typography></Box> */}
        </Stack>
    )
}