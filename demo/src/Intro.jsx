import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'

const styles = {
    common: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        zİndex: 999,  
        transform: 'translate(-50%, -50%)',
        textAlign : 'center',
        color: "#fff",
        width : 'auto',
        minWidth : '400px'
    },
    header: {
        fontFamily: 'Open Sans, sans-serif' , 
    },
    text: { 
        // fontFamily : 'Quicksand sans-serif' , 
        fontFamily : 'Montserrat , sans-serif',
        fontWeight : 600
    },
    title : { 
        backgroundColor : 'rgba(239,56,36,0.15)',
        padding : '16px 24px',
        borderRadius : '40px',
    }
};

export default function Intro() {
 
    return (
        <Stack direction='column' alignItems='center' gap={1} sx={styles.common}>
            <Typography variant='h4' sx={styles.header}>Welcome</Typography>
            <Typography sx={{...styles.text ,fontSize : '50px'}}>I'm <span style={{color : '#EF3724'}}>Benjamin</span> Rustamov</Typography>
            <Typography sx={{...styles.title ,fontSize : '24px' , fontWeight : 600 ,padding : '16px 24px' , color : '#EF3724'}}>Front End Developer</Typography>
        </Stack>
    )
}