import React, { useState } from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import Menu from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

export default function Header() {
    const [active, setActive] = useState('Home')
    const [showMenu, setShowMenu] = useState(true)

    const customHeader = {
        position: 'absolute',
        width: "100%",
        zIndex: 999,
        height: 'auto',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-around',
        py: 2,
        my: 3,
        backgroundColor: '#575b5e',
        opacity: 0.9,
        alignItems: 'center',

    }
    const extraMenu = {
        display: showMenu ? 'flex' : 'none',
        flexDirection: "column",  
        alignItems : 'flex-start', 
        width: '55%', 
        transition : 'transform 300ms',
        '@media (min-width : 900px)': { display: 'none' },
    }
    const customLink = {
        textDecoration : 'none',
        color: '#FFFFFF', 
        fontSize : '20px ',
        fontFamily: 'Open Sans, sans-serif',
        padding : '14px 10px' 
         
    } 
    const handleMenu = () => {
        setShowMenu(!showMenu)
        console.log('ok')
    }
    const handleSetActive = (pageName) => {
        setActive(pageName)
    }

    return (


        <Stack sx={customHeader}>

            <Stack direction='row' justifyContent='space-around' alignItems='center' width='100%'>
                <Typography color='white' fontSize='1.25rem'>V-R0lio</Typography>

                <Stack direction='row' sx={{ '@media (max-width : 900px)': { display: "none" } }} gap={2}>
                    {['Home', 'About', 'Portfolio','Contact'].map((item, index) => (
                        <Link key={index} to={'/' + item.toLowerCase()} onClick={() => handleSetActive(item)} style={{ color: '#FFFFFF',fontSize : '20px',fontFamily: 'Open Sans, sans-serif',textDecoration : 'none', opacity: active === item ? 1 : 0.5 }}>{item}</Link>
                    ))}
                </Stack>

                <Stack display='none' sx={{ '@media (max-width : 900px)': { display: "block" } }} onClick={handleMenu}>
                    <Menu sx={{ fontSize: '35px', cursor: 'pointer' }} />
                </Stack>
            </Stack>


            <Box sx={{ ...extraMenu }} >
                {['Home','About','Portfolio','Blog','Contact'].map((item, index) => (
                    <Link key={index} to={'/' + item.toLowerCase()} onClick={() => handleSetActive(item)} style={{...customLink ,opacity: active === item ? 1 : 0.3}}>{item}</Link>
                ))}
            </Box>
 
        </Stack >
 
    )
}