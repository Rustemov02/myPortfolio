import { Stack , Box , Typography} from '@mui/material'
import React from 'react'
import ContactContent from './Contact.content'

export default function Contact() {

    return (
        <Stack direction='column' py={10} gap={5}>
            
            <Box textAlign='center'>
                <Typography fontSize='14px' color="#FFFFFF99" fontFamily='Poppins'>Get In Touch</Typography>
                <Typography fontSize='35px' variant='h2' color='#4db5ff' fontFamily='Poppins'>Contact Me</Typography>
            </Box>

             <ContactContent/>   
        </Stack>
    )
}