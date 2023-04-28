import React from 'react'
import { Button, Stack, Typography, Box } from '@mui/material'
import img1 from './images/portfolio1.jpg'
import book from './images/portBook.jpg'
import ecommerce from './images/ecommerce.jpg'
import construction from './images/construction.png'
import financ from './images/financ.jpg'
import movie from './images/movie.jpg'
import weather from './images/weather.png'

const projectData = [
    {
        image: ecommerce,
        title: 'E-Commerce',
        link : 'https://github.com/Rustemov02/E-Commerce/tree/main/demo',
        demo : 'https://commerce02.netlify.app/'
    },
    {
        image: book,
        title: 'BookStore',
        link : 'https://github.com/Rustemov02/Bookstore/tree/main/app',
        demo : 'https://bookwormbook.netlify.app/'
    },
    {
        image: construction,
        title: 'Construction Landing Page',
        link : 'https://github.com/Rustemov02/Construction_Landing_Page',
        demo : 'https://figmabox.netlify.app/'
    },
    {
        image: financ,
        title: 'Financ Page',
        link : 'https://github.com/Rustemov02/Financ-page',
        demo : 'https://financesdemo.netlify.app/'
    },
    {
        image: movie,
        title: 'Movie Organizer',
        link : 'https://github.com/Rustemov02/MovieOrganizer',
        demo : ""
    },
    {
        image: weather,
        title: 'Map Weather',
        link : "https://github.com/Rustemov02/MapWeather",
        demo : "https://map02.netlify.app/"
    },
]

export default function ProjectList() {

    const customStack = {
        bgcolor: '#2C2C6C',
        border: "solid #2C2C6C 1px",
        '&:hover': { bgcolor: 'transparent', transition: "0.6s" },
        padding: 2,
        width: '320px',
        minWidth: '220px',
        height: 'fit-content',
        borderRadius: 8,
        direction: 'column',
        alignItems: 'center',
        gap: 3,
        m: 1,
        '@media (max-width : 856px)': {
            width: '60%'
        }
    }

    return (
        <Stack direction='row' flexWrap='wrap' justifyContent="space-evenly" width='90%' margin='auto' gap={2}>
            {projectData.map((item, index) => (

                <Stack key={index} sx={customStack} >
                    <img src={item.image} style={{width: '100%', height: '270px', borderRadius: '10px' }} alt='project' />

                    <Typography fontSize={19} fontWeight={600} textAlign='start' width="100%" color='#FFFFFF' fontFamily='Poppins'>{item.title}</Typography>

                    <Stack direction='row' width='100%' gap={2} py={1}>
                        <Button component="a" href={item.link} target="_blank" rel="noopener" size='medium' variant='outlined' sx={{ textTransform: 'capitalize', fontSize: '18px' }}>Github</Button>
                        <Button component="a" href={item.demo} target="_blank" rel="noopener" size='medium' variant='contained' sx={{ color: '#1F1F38', fontSize: '18px', backgroundColor: '#4DB5FF', textTransform: 'capitalize' }} >Live Demo</Button>
                    </Stack>
                </Stack>

            ))}
        </Stack>
    )
}