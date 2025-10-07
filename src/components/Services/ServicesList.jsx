import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import data from './ServicesData'

export default function ServicesList() {

    const customStack = {
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        bgcolor: '#2c2c6c',
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        minWidth: '270px',
        height: "fit-content",
        border: 'solid #4db5ff 2px',
        '&:hover': {
            bgcolor: 'transparent',
            border: 'solid #2c2c6c 2px',
            transition: '0.6s',
            cursor: 'pointer'
        },
        '@media (max-width : 715px)': {
            width: '90%'
        }
    }
 
    return (
        <Stack direction='row' justifyContent='space-evenly' flexWrap="wrap" gap={3} width='90%' margin='auto'>
            {data.map((item, index) => (
                <Stack key={index} sx={customStack} data-aos="fade-up" data-aos-duration={item.duration}>
                    <Box sx={{ backgroundColor: '#4db5ff', marginBottom: 2, padding: '30px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', textAlign: 'center', color: "#1f1f38" }}>
                        <Typography cursor='none' fontFamily='Poppins' fontWeight={600} fontSize={20}>{item.title}</Typography>
                    </Box>
                    {item.paragraphs.map((paragraph,key) => (
                        <Stack  key={key} direction='row' gap={1} p={2}>
                            <CheckOutlinedIcon sx={{ fontSize: '14px', color: '#4db5ff' }} />
                            <Typography color='#FFFFFF' fontSize={15} fontFamily='Poppins' fontWeight={500}>{paragraph}</Typography>
                        </Stack>
                    ))} 
                </Stack>
            ))} 
        </Stack>
    )
}