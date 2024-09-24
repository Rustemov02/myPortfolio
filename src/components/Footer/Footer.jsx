import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { GitHub, LinkedIn, Telegram } from '@mui/icons-material'
import { Link as ScrollLink } from 'react-scroll'
import { styled } from '@mui/material/styles';
import logo from '../../assets/logo.svg'

export default function Footer() {

    const customIcon = {
        width: '40px',
        fontSize: '18px',
        color: "#FFF",
        backgroundColor: '#1f1f38',
        borderRadius: '6px',
        margin: '0 5px',
        padding: '6px 2px',
        transition: "0.7s",
        cursor: 'pointer',
        '&:hover': {
            color: "#1f1f38",
            backgroundColor: "#FFF"
        }
    }
    const List = styled(ScrollLink)({
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
    
    return (
        <Stack bgcolor='#4db5ff' gap={4} sx={{ paddingTop: '30px', paddingBottom: '130px' }} direction='column' justifyContent="space-around">
            {/* Logo */}
            <img src={logo} alt="logo" style={{ height: 90, color: "black", background: "#1c3464", width: "fit-content", margin: "auto" }} />

            <Stack direction='row' justifyContent='center' flexWrap='wrap' gap={4}>
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                    <List key={index} to={item.toLowerCase()} smooth={true} duration={500}>{item}</List>
                ))}
            </Stack>

            <Stack direction='row' justifyContent='center'>
                <Button component='a' href='https://www.linkedin.com/in/bunyamin-rustemov-7a9359224/' target='_blank'>
                    <LinkedIn sx={customIcon} target="_blank" rel="noopener" />
                </Button>
                <Button component='a' href='https://github.com/Rustemov02?tab=repositories' target='_blank'>
                    <GitHub sx={customIcon} />
                </Button>
                <Button component='a' href='https://t.me/rustemov02' target='_blank'>
                    <Telegram sx={customIcon} />
                </Button>
            </Stack>

            <Typography textAlign='center' fontFamily='Poppins' fontSize="14px" padding='0 5px' >2023 © Rustamov Dev Company.All rights reserved</Typography>
        </Stack>
    )
}