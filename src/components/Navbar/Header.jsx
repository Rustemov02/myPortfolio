import React, { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import Menu from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll'
import { styled } from '@mui/material/styles';
import logo from '../../assets/logo.svg'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const list = ['Home', 'About', 'Portfolio', 'Services', 'Contact']

    const customHeader = {
        width: "100%",
        zIndex: 999,
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-around',
        py: 2,
        my: 3,
        backgroundImage: "radial-gradient( circle 975px at 2.6% 48.3%,  rgba(0,8,120,1) 0%, rgba(95,184,224,1) 99.7% )",
        opacity: 0.9,
        alignItems: 'center',
    }

    const extraMenu = {
        display: showMenu ? 'flex' : 'none',
        backgroundImage: "radial-gradient( circle 975px at 2.6% 48.3%,  rgba(0,8,120,1) 0%, rgba(95,184,224,1) 99.7% )",
        position: "absolute",
        top: "110px",
        flexDirection: "column",
        alignItems: 'center',
        width: '100%',
        transition: 'transform 300ms',
        '@media (min-width : 900px)': { display: 'none' }
    }

    const MenuLink = styled(ScrollLink)({
        cursor: "pointer",
        color: '#FFFFFF',
        fontSize: '20px',
        fontFamily: 'Open Sans, sans-serif',
        textDecoration: 'none',
        transition: ".7s",
        '&:hover': {
            color: '#000'
        }
    })
    const ExtraMenuLink = styled(ScrollLink)({
        textDecoration: 'none',
        width: '60%',
        textAlign: 'center',
        color: '#FFF',
        fontSize: '20px ',
        fontFamily: 'Open Sans, sans-serif',
        padding: '14px 10px',
        cursor: 'pointer',
        transition: "0.7s",
        fontWeight: 600,
        borderRadius: '12px',
        '&:hover': {
            color: 'black',
            backgroundColor: "#4bd5ff"
        }
    })
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return ( 
        <Stack sx={customHeader}>
            <Stack direction='row' justifyContent='space-around' alignItems='center' width='100%'>
                <Stack direction='row' alignItems='center' >
                    <img src={logo} alt="logo" style={{ height: '60px' }} />
                    <Typography color='white' fontSize='1.25rem' fontFamily='Poppins'>rustamov</Typography>
                </Stack>
                <Stack direction='row' sx={{ '@media (max-width : 900px)': { display: "none" } }} gap={2}>
                    {list.map((item, index) => (
                        <MenuLink key={index} to={item.toLowerCase()} smooth={true} duration={500}>{item}</MenuLink>
                    ))}
                </Stack>
                <Stack display='none' sx={{ '@media (max-width : 900px)': { display: "block" } }} onClick={handleMenu}>
                    <Menu sx={{ fontSize: '40px', transition: '0.7s', cursor: 'pointer', color: "#black", '&:hover': { color: '#80b5e0' } }} />
                </Stack>
                <Box sx={{ ...extraMenu }} >
                    {list.map((item, index) => (
                        <ExtraMenuLink smooth={true} duration={500} key={index} to={item.toLowerCase()}>{item}</ExtraMenuLink>
                    ))}
                </Box>
            </Stack>
        </Stack >

    )
}