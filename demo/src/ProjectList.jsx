import React from 'react'
import { Button, Stack, Typography, Box } from '@mui/material'
import img1 from './images/portfolio1.jpg'

const projectData = [
    {
        image: img1,
        title: 'Crypto Currency Dashboard & Financial Visualization'
    },
    {
        image: img1,
        title: 'Crypto Currency Dashboard & Financial Visualization'
    },
    {
        image: img1,
        title: 'Crypto Currency Dashboard & Financial Visualization'
    },
    {
        image: img1,
        title: 'Crypto Currency Dashboard & Financial Visualization'
    },
    {
        image: img1,
        title: 'Crypto Currency Dashboard & Financial Visualization'
    },
    {
        image: img1,
        title: 'Crypto Currency Dashboard & Financial Visualization'
    },
]

export default function ProjectList() {

    const customStack = {
        bgcolor: '#2C2C6C',
        border: "solid #2C2C6C 1px",
        '&:hover': { bgcolor: 'transparent', transition: "0.6s" },
        padding: 2,
        width: '320px',
        borderRadius: 8,
        direction: 'column',
        alignItems: 'center',
        gap: 3,
        m: 1
    }

    return (
        <Stack direction='row' flexWrap='wrap' justifyContent="space-evenly" width='90%' margin='auto' gap={2}>
            {projectData.map((item, index) => (

                <Stack key={index} sx={customStack} >
                    <img src={item.image} style={{ width: '100%', borderRadius: '10px' }} alt='project' />

                    <Typography fontSize={19} fontWeight={600} color='#FFFFFF' fontFamily='Poppins'>{item.title}</Typography>

                    <Stack direction='row' width='100%' gap={2} py={1}>
                        <Button size='medium' variant='outlined' sx={{ textTransform : 'capitalize' , fontSize : '18px' }}>Github</Button>
                        <Button size='medium' variant='contained' sx={{ color: '#1F1F38',fontSize : '18px' , backgroundColor: '#4DB5FF', textTransform: 'capitalize' }} >Live Demo</Button>
                    </Stack>
                </Stack>

            ))}
        </Stack>
    )
}