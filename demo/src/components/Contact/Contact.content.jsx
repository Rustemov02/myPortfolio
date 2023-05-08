import React, { useRef } from "react";
import { Stack, Box, Typography, Button } from "@mui/material";

import emailjs from '@emailjs/browser'
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import info from './ContactData'

export default function ContactContent() {
    const notify = (message) => toast.success(message);
    const notifyErr = (message) => toast.error(message);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current.user_name.value)
        if (form.current.user_name.value && form.current.user_email.value && form.current.message.value) {
            emailjs.sendForm('service_ne8grdn', 'template_n7iku69', form.current, 'nhvADr2G-rlep_jlW')
                .then((result) => {
                    notify("Your message has been sent, thank you")
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            notifyErr('Please fill in all required fields.')
        }

    };



    // const info = [
    //     {
    //         icon: <EmailOutlined sx={{ color: '#FFF' }} />,
    //         title: 'Email',
    //         address: "bunyamin2002@mail.ru",
    //         link: 'https://e.mail.ru/compose/',
    //         duration:  500
    //     },
    //     {
    //         icon: <Telegram sx={{ color: '#FFF' }} />,
    //         title: 'Telegram',
    //         address: "rustemov02",
    //         link: 'https://t.me/rustemov02',
    //         duration: 1000
    //     },
    //     {
    //         icon: <LinkedIn sx={{ color: '#FFF' }} />,
    //         title: 'LinkedIn',
    //         address: "Bunyamin Rustemov",
    //         link: 'https://www.linkedin.com/in/bunyamin-rustemov-7a9359224/',
    //         duration: 1500
    //     }
    // ]

    const customBox = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        borderRadius: "20px",
        padding: '20px',
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
        <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', '@media (max-width : 700px)': { flexDirection: 'column' } }} width='90%' gap={3} margin='auto'>



            <ToastContainer
                style={{ width: '20%' }}
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
 
            <Stack direction='column' gap={2} width='25%' minWidth='250px' sx={{ '@media (max-width : 700px)': { width: '100%' } }}>
                {info.map((item, index) => (
                    <Box key={index} sx={customBox} data-aos='fade-right' data-aos-duration={item.duration}>
                        {item.icon}
                        <Typography sx={typography}>{item.title}</Typography>
                        <Typography sx={typography}>{item.address}</Typography>
                        <Button component="a" href={item.link} target="_blank" rel="noopener" variant="text"
                            sx={{
                                textTransform: 'capitalize',
                                '&:hover': { color: '#FFF', background: 'transparent' }
                            }}>Send message</Button>
                    </Box>
                ))}
            </Stack>
 
            {/* Form Stack */}
            <Stack width="45%" sx={{ '@media (max-width : 700px)': { width: '100%' } }}>
                <form ref={form} onSubmit={sendEmail}
                    style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        gap: 15
                    }}>
                    <Box sx={inputBox} data-aos='fade-left' data-aos-duration='200'>
                        <input type='text' name="user_name" placeholder="Your Full Name" className="input" />
                    </Box>
                    <Box sx={inputBox} data-aos='fade-left' data-aos-duration='500'>
                        <input type='email' name="user_email" placeholder="Your Email" className="input" />
                    </Box>
                    <Box sx={{ ...inputBox, height: '120px' }} data-aos='fade-left' data-aos-duration='1000'>
                        <textarea type='text' name="message" placeholder="Message" className="area" />
                    </Box>
                    <Button type='submit' variant="contained" data-aos='fade-left' data-aos-duration='1500'
                        sx={{
                            textTransform: 'capitalize',
                            padding: '10px 0',
                            width: '150px',
                            '&:hover': { color: 'black', background: 'white' }
                        }}>Send message</Button>
                </form>
            </Stack>


        </Box>
    )
}