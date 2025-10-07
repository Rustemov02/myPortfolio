import React from 'react'
import { Stack, Box, Typography } from '@mui/material' 
import CvImg from '../../assets/images/me-3.jpg'
import info from './AboutData'

export default function AboutMe() {

    const customBox = {
        position: 'relative',
        width: '410px',
        minWidth: '200px',
        height: '420px',
        margin: '0 10px',
        borderRadius: '12px',
        cursor: 'pointer',
        '&:hover': { transition: "0.1s", boxShadow: '0px 0px 40px #bbe4e9' },
        '@media (max-width : 1055px)': {
            width: '55%',
            height: '50%'
        },
    }
    const customImg = {
        width: '110%',
        height: '100%',
        minWidth: '200px',
        borderRadius: '12px',
    }
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
        <Stack id='about' gap={6} py={7}>
            <Box textAlign='center'>
                <Typography fontSize='14px' color="#FFFFFF99" fontFamily='Poppins'>Get To Know</Typography>
                <Typography fontSize='24px' variant='h2' color='#4db5ff' fontFamily='Poppins'>About Me</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', margin: "auto", '@media ( max-width : 1055px)': { flexDirection: 'column', gap: 7, width: '100%' } }}   >

                <Box sx={{ ...customBox }} data-aos="fade-right" data-aos-duration="1500">
                    <img src={CvImg} style={customImg} />
                </Box>
                <Stack data-aos="fade-left" data-aos-once="true" data-aos-duration="1500" gap={4} sx={{ width: "50%", display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly', '@media (max-width : 1055px)': { width: '90%' } }} position='relative' >

                    {/* Department */}
                    <Stack sx={{ '@media (max-width : 800px)': {} }} width='auto' minWidth={200} direction='column' alignItems='flex-start' gap={1} >

                        <Stack width='auto' gap={2} >
                            <Typography sx={{ ...typographyStyle, color: "#87929b", fontSize: '16px' }}>I design and build quality responsive websites, clean user interaces, and rich interactive web apps. I am seeking React, Javascript, and other web development opportunities.</Typography>
                            <Typography sx={{ ...typographyStyle, color: "#87929b", fontSize: '16px' }}>Open to remote freelance opportunities, contract jobs, and full time work. I like to learn new things, solve problems, and create innovative web solutions.</Typography>
                        </Stack>
                    </Stack>

                    {/* Current  */}
                    <Stack direction='column' sx={{ ...current, '@media (max-width : 1055px)': { width: '100%' } }} gap={1} >
                        <Stack direction='row' flexWrap='wrap' justifyContent='flex-start' sx={{ '@media (max-width : 1055px)': { justifyContent: 'center' } }} gap={0.5}>
                            {info.map((item, index) => (
                                <Stack key={index} direction='column' alignItems='center' width='85px' gap={1} >
                                    <img src={item.icon} style={{ width: '2rem', border: "solid #FFF 1px", padding: '10px 7px', borderRadius: '17px', height: '25px' }} />
                                    <Typography color='#87929b' fontFamily='Poppins' textAlign='center'>{item.name}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}