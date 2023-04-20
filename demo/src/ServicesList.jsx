import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export default function ServicesList() {

    const data = [

        {
            title: 'Responsive Design',
            paragraphs: [
                "Your website will be easy to use on phones, tablets, or computers.",
                "I design websites that look great on all devices, big or small.",
                "I can make your website work better on phones and tablets.",
                "I make sure your website is easy to use on small screens.",
                'I use responsive design techniques to ensure that your website looks great on all devices.',
                'I can help you achieve this by using the latest responsive design technologies.'

            ]
        },
        {
            title: 'Website Development',
            paragraphs: [
                'I create websites for various purposes, such as corporate, personal, and custom needs.',
                "My specialty as a front-end developer is building the visual and interactive parts of websites.",
                "By utilizing the latest front-end technologies and techniques, I design functional and visually appealing web interfaces.",
                "I also offer website redesign services to improve the look and functionality of your existing website.",
                "To enhance your website's functionality, I can integrate various third-party tools and APIs, such as social media platforms and payment gateways."
            ]
        },
        {
            title: 'Site Management',
            paragraphs: [
                "Keep your website secure and up - to - date with my maintenance services.",
                'Get help with technical issues, troubleshooting, and updates to ensure your website runs smoothly.',
                "Ongoing technical support is available to make sure your website works perfectly.",
                "Let me handle website backups, updates, and security patches to keep your site safe.",
                'If you experience technical issues with your website, I can help you solve them quickly.'
            ]
        }
    ]

    return (
        <Stack direction='row' justifyContent='space-evenly' gap={2} py={7}>

            {data.map(item => (

                <Stack sx={{ borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px', '&:hover': { bgcolor: 'transparent', border: 'solid #2c2c6c 2px', transition: '0.6s', cursor: 'pointer' } }} bgcolor='#2c2c6c' direction='column' width='380px' height="fit-content" border='solid #4db5ff 2px' >

                    <Box sx={{ backgroundColor: '#4db5ff', marginBottom: 2, padding: '30px 30px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', textAlign: 'center', color: "#1f1f38" }}>
                        <Typography cursor='none' fontFamily='Poppins' fontWeight={600} fontSize={20}>{item.title}</Typography>
                    </Box>


                    {item.paragraphs.map(paragraph => (
                        <Stack direction='row' gap={1} p={2}>
                            <CheckOutlinedIcon sx={{ fontSize: '14px', color: '#4db5ff' }} />
                            <Typography color='#FFFFFF' fontSize={15} fontFamily='Poppins' fontWeight={500}>{paragraph}</Typography>
                        </Stack>
                    ))}


                </Stack>
            ))}



        </Stack>
    )
}