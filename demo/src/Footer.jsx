import React from 'react'
import { Stack, Typography } from '@mui/material'
import { GitHub, LinkedIn, Telegram } from '@mui/icons-material'

export default function Footer() {

    const customIcon = {
        width : '40px',
        fontSize : '18px',
        color : "#FFF",
        backgroundColor : '#1f1f38',
        borderRadius : '6px',
        margin : '0 5px',
        padding : '6px 2px',
        transition : "0.7s",
        cursor : 'pointer',
        '&:hover':{
            color : "#1f1f38",
            backgroundColor : "#FFF"
        }
    }

    return (
        <Stack bgcolor='#4db5ff' gap={4} sx={{paddingTop : '30px',paddingBottom : '130px'}} direction='column' justifyContent="space-around">
            {/* Logo */}
            <Typography textAlign='center'>Rustamov</Typography>


            <Stack direction='row' justifyContent='center' flexWrap='wrap' gap={4}>
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                    <Typography fontSize={16} fontFamily='Poppins' fontWeight="600" sx={{cursor : "pointer" ,transition : '0.5s' ,'&:hover':{color : '#FFF'}}}>{item}</Typography>
                ))}
            </Stack>

            <Stack direction='row' justifyContent='center'>
                <LinkedIn sx={customIcon}/>
                <GitHub sx={customIcon}/>
                <Telegram sx={customIcon}/>
            </Stack>

            <Typography textAlign='center' fontFamily='Poppins' fontSize="14px" padding='0 5px' >2023 © Rustamov Dev Company.All rights reserved</Typography>
        </Stack>
    )
}