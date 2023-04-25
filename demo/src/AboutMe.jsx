import { Stack, Box, Typography, Button } from '@mui/material'
import React from 'react'
import preview from './images/preview.jpg'
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
import api from './images/api.svg'

export default function AboutMe() {

    const backStyle = {
        position: 'relative',
        width: '40%',
        minWidth: '200px',
        height: '100%',
        margin: '0 10px',
        borderRadius: '12px',
        background: 'linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%)',
        '@media (max-width : 1055px)': {
            width: '55%',
            height: '50%'
        }
    }
    const customBox = {
        width: '100%',
        minWidth: '200px',
        transition: '0.7s',
        transform: 'rotate(10deg)',
        '&:hover': { transform: "rotate(0deg)" },
    }
    const customImg = {
        width: '100%',
        height: '100%',
        minWidth: '200px',
        borderRadius: '12px',
    }
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
            icon: api,
            name: "Rest API"
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
        fontSize: '25px'
    }
    const current = {
        width: '90%',
        minWidth: '250px',
    }

    return (
        <Stack gap={6} py={7}>
            <Box textAlign='center'>
                <Typography fontSize='14px' color="#FFFFFF99" fontFamily='Poppins'>Get To Know</Typography>
                <Typography fontSize='24px' variant='h2' color='#4db5ff' fontFamily='Poppins'>About Me</Typography>
            </Box>




            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', margin: "auto", '@media ( max-width : 1055px)': { flexDirection: 'column', gap: 7, width: '100%' } }}   >

                <Stack sx={{ ...backStyle }}>
                    <Box sx={customBox}>
                        <img src={preview} style={customImg} />
                    </Box>
                </Stack>



                <Stack gap={4} sx={{ width: "50%", display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly', '@media (max-width : 1055px)': { width: '90%' } }} position='relative' >


                    {/* Department */}
                    <Stack sx={{ '@media (max-width : 800px)': {} }} width='auto' minWidth={200} direction='column' alignItems='flex-start' gap={1} >

                        {/* <Typography sx={typographyStyle}>&lt;Front End Developer /&gt; </Typography> */}

                        <Stack width='auto' gap={2} >
                            <Typography sx={{ ...typographyStyle, color: "#87929b", fontSize: '16px' }}>I design and build quality responsive websites, clean user interaces, and rich interactive web apps. I am seeking React, Javascript, and other web development opportunities.</Typography>
                            <Typography sx={{ ...typographyStyle, color: "#87929b", fontSize: '16px' }}>Open to remote freelance opportunities, contract jobs, and full time work. I like to learn new things, solve problems, and create innovative web solutions.</Typography>
                        </Stack>
                    </Stack>

                    {/* Current  */}
                    <Stack direction='column' sx={{ ...current, '@media (max-width : 1055px)': { width: '100%' } }} gap={1} >
                        {/* <Typography sx={typographyStyle}>Current Skills</Typography> */}

                        <Stack direction='row' flexWrap='wrap' justifyContent='flex-start' sx={{ '@media (max-width : 1055px)': { justifyContent: 'center' } }} gap={0.5}>
                            {iconsData.map((item, index) => (
                                <Stack key={index} direction='column' alignItems='center' width='85px' gap={1} >
                                    <img src={item.icon} style={{ width: '2rem', border: "solid #FFF 1px", padding: '10px 7px', borderRadius: '17px', height: '25px' }} />
                                    <Typography color='#87929b' fontFamily='Poppins' textAlign='center'>{item.name}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack sx={{ '@media ( max-width : 1055px)': { margin: 'auto' }}} direction='row' gap={2} my={2}>
                        <Button size='medium' variant='outlined' sx={{ textTransform: 'capitalize', fontSize: '18px', '&:hover': { backgroundColor: "#FFF", color: 'black' } }}>Download CV</Button>
                        <Button size='medium' variant='contained' sx={{ color: '#1F1F38', fontSize: '18px', backgroundColor: '#4DB5FF', textTransform: 'capitalize', '&:hover': { backgroundColor: "#FFF", color: 'black' } }} >Let's Talk</Button>
                    </Stack>

                    {/* <Button size='medium' variant='contained' sx={{ '@media ( max-width : 1055px)': { margin: 'auto' }, color: '#1F1F38', fontSize: '18px', backgroundColor: '#4DB5FF', textTransform: 'capitalize', '&:hover': { backgroundColor: "#FFF", color: 'black' } }} >Let's Talk</Button> */}
                    {/* <Button variant='contained' sx={{ padding: '16px', marginTop: '12px', borderRadius: '20px', backgroundColor: "#29b8ff", color: '#0c2235' }}>See my work</Button> */}

                    {/* <Box className='heroEmail'> bunyamin2002@mail.ru </Box> */}
                </Stack>


            </Box>
        </Stack>
    )
}