import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import ProjectList from './ProjectList'

export default function Projects() {

    return (
        <Stack direction='column' gap={5} py={10}>
            <Box textAlign='center'>
                <Typography fontSize='14px' color="#FFFFFF99" fontFamily='Poppins'>My Recent Work</Typography>
                <Typography fontSize='35px' color='#4db5ff' fontFamily='Poppins'>Portfolio</Typography>
            </Box>

            <ProjectList />
        </Stack>
    )
}