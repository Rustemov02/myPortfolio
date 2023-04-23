import React from "react";
import { Stack, Box, Typography, Button, TextField } from "@mui/material";
import { EmailOutlined, Telegram, LinkedIn } from '@mui/icons-material/'
import './Contact.css'


export default function ContactContent() {
    const info = [
        {
            icon: <EmailOutlined sx={{ color: '#FFF' }} />,
            title: 'Email',
            address: "bunyamin2002@mail.ru"
        },
        {
            icon: <Telegram sx={{ color: '#FFF' }} />,
            title: 'Telegram',
            address: "rustemov02"
        },
        {
            icon: <LinkedIn sx={{ color: '#FFF' }} />,
            title: 'LinkedIn',
            address: "Bunyamin Rustemov"
        }
    ]

    const customBox = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        borderRadius: "20px",
        padding: '20px',
        // width: '100%',
        border: 'solid transparent 2px',
        backgroundColor: '#2C2C6C',
        '&:hover': {
            backgroundColor: 'transparent',
            transition: '0.5s',
            border: 'solid #2C2C6C 2px'
        }
    }
    const typography = {
        color: '#FFF',
        textAlign: "center",
        fontSize: '18px',
        fontFamily: 'Poppins',
        fontWeight: 700
    }
    const inputBox = {
        padding: '24px',
        border: 'solid #2C2C6C 2px',
        borderRadius: '12px'
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', '@media (max-width : 700px)': {flexDirection : 'column'} }} width='90%' gap={3} margin='auto'>
            {/* First Stack */}
            <Stack direction='column' gap={2} width='25%' minWidth='250px' sx={{ '@media (max-width : 700px)': { width: '100%' } }}>
                {info.map((item, index) => (
                    <Box key={index} sx={customBox}>
                        {item.icon}
                        <Typography sx={typography}>{item.title}</Typography>
                        <Typography sx={typography}>{item.address}</Typography>
                        <Button variant="text" sx={{ textTransform: 'capitalize', '&:hover': { color: '#FFF', background: 'transparent' } }}>Send message</Button>
                    </Box>
                ))}
            </Stack>

            {/* Second Stack */}
            <Stack sx={{ width: '45%', display: 'flex', flexDirection: "column", justifyContent: 'flex-start', gap: 2, '@media (max-width : 700px)': { width: '100%' } }}>

                <Box sx={inputBox}>
                    <input type='text' placeholder="Your Full Name" className="input" />
                </Box>
                <Box sx={inputBox}>
                    <input type='email' placeholder="Your Email" className="input" />
                </Box>
                <Box sx={{ ...inputBox, height: '120px' }}>
                    <textarea type='text' placeholder="Message" className="area" />
                </Box>
                <Button variant="contained" sx={{ textTransform: 'capitalize', padding: '10px 0', width: '150px', '&:hover': { color: 'black', background: 'white' } }}>Send message</Button>
            </Stack>
        </Box>
    )
}