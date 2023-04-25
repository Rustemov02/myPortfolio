import { Stack, Typography, Box, Button } from '@mui/material'
import React from 'react'
import './Skills.css'
import html from './images/html.svg'
import css from './images/css.svg'
import bootstrap from './images/bootstrap.svg'
import figma from './images/figma.svg'
import git from './images/git.svg'
import js from './images/js.svg'
import react from './images/react.svg'
import redux from './images/redux.svg'
import mui from './images/mui.svg'
import github from './images/github.svg'

export default function Skills() {


    const iconsData = [
        {
            icon: html,
            name: 'HTML5'
        },
        {
            icon: css,
            name: 'CSS3'
        },
        {
            icon: bootstrap,
            name: "Bootstrap"
        },
        {
            icon: mui,
            name: "Material UI"
        },
        {
            icon: js,
            name: 'JavaScript'
        },
        {
            icon: react,
            name: "React"
        },
        {
            icon: redux,
            name: "Redux Toolkit"
        },
        {
            icon: figma,
            name: 'Figma'
        },
        {
            icon: git,
            name: 'Git'
        },
        {
            icon: github,
            name: "GitHub"
        }
    ]
    const typographyStyle = {
        fontFamily: 'Poppins',
        color: '#EDEDED',
        fontWeight: 600,
    }
    const customBox = {
        borderRadius: "20px",
        padding: '20px',
        width: '25%',
        minWidth: '250px',
        border: 'solid transparent 2px',
    }


    return (
        <Stack py={6} gap={4}>
            <Box textAlign='center'>
                <Typography fontSize='14px' color="#FFFFFF99" fontFamily='Poppins'>What Skills I Have</Typography>
                <Typography fontSize='24px' variant='h2' color='#4db5ff' fontFamily='Poppins'>My Experiences</Typography>
            </Box>
            {/*  py={5} px={3} */}
            <Stack sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start', justifyContent: 'space-evenly', '@media (max-width : 800px)': { flexDirection: 'column' } }} position='relative' >




                <Stack direction='column' sx={{ ...customBox, '@media (max-width : 800px)': { width: '80%' } }} gap={5} >
                    <Typography fontSize={32} sx={typographyStyle}>Current Skills</Typography>

                    <Stack direction='row' flexWrap='wrap' justifyContent='flex-start' gap={1}>
                        {iconsData.map((item, index) => (
                            <Stack key={index} direction='column' alignItems='center' width='103px' gap={1}>
                                <img src={item.icon} style={{ width: '2rem', border: "solid #FFF 1px", padding: '12px 10px', borderRadius: '17px', height: '30px' }} />
                                <Typography color='#87929b' fontFamily='Poppins' textAlign='center'>{item.name}</Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>

                <Stack sx={{ '@media (max-width : 800px)': { width: '80%' } }} width='50%' minWidth={200} direction='column' alignItems='flex-start' gap={6} px={3} py={3}>

                    <Typography fontSize={32} sx={typographyStyle}>&lt;Front End Developer /&gt; </Typography>

                    <Stack width='auto' gap={2} >
                        <Typography sx={{ ...typographyStyle, color: "#87929b" }}>I design and build quality responsive websites, clean user interaces, and rich interactive web apps. I am seeking React, Javascript, and other web development opportunities.</Typography>
                        <Typography sx={{ ...typographyStyle, color: "#87929b" }}>Open to remote freelance opportunities, contract jobs, and full time work. I like to learn new things, solve problems, and create innovative web solutions.</Typography>

                    </Stack>
                    <Button variant='contained' sx={{ padding: '16px', marginTop: '12px', borderRadius: '20px', backgroundColor: "#29b8ff", color: '#0c2235' }}>See my work</Button>
                </Stack>



                <Box className='heroEmail'> bunyamin2002@mail.ru </Box>
            </Stack>
        </Stack>

    )
}