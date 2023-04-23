import { Typography, Box, Stack } from '@mui/material'
import React from 'react'
import ServicesList from './ServicesList'

export default function Services() {

    return (
        <Stack direction='column' py={10} gap={5}>

            <Box textAlign='center'>
                <Typography fontSize='14px' color="#FFFFFF99" fontFamily='Poppins'>What I Offer</Typography>
                <Typography fontSize='24px' variant='h2' color='#4db5ff' fontFamily='Poppins'>Services</Typography>
            </Box>

            <ServicesList />
        </Stack>
    )
}