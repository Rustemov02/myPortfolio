import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'
import html from './images/html.svg'
import css from './images/css.svg'
import bootstrap from './images/bootstrap.svg'
import figma from './images/figma.svg'
import git from './images/git.svg'
import js from './images/js.svg'
import react from './images/react.svg'
import redux from './images/redux.svg'
import mui from './images/mui.svg'
import github from './images/github.svg'
export default function Skills() {

    const customBox = {
        borderRadius: "20px",
        padding: '20px',
        width: '50%',
        border: 'solid transparent 2px',
        backgroundColor: '#2C2C6C',
        '&:hover': {
            backgroundColor: 'transparent',
            transition: '0.5s',
            border: 'solid #2C2C6C 2px'
        }
    }

    return (
        <Stack>
            <Box textAlign='center'>
                <Typography fontSize='14px' color="#FFFFFF99" fontFamily='Poppins'>What Skills I Have</Typography>
                <Typography fontSize='35px' variant='h2' color='#4db5ff' fontFamily='Poppins'>My Experiences</Typography>
            </Box>


            <Stack>
                <Box sx={customBox}>
                    <Typography>Current Skills</Typography>
                    {[html, css, bootstrap, js, react, redux, git, figma, mui, github].map((item, index) => (
                        <>  <img src={item} style={{ width: '2rem', border: "solid #FFF 1px", padding: '12px 10px', borderRadius: '17px', height: '30px' }} />
                            {/* <Typography>{item.slice(14,19)}</Typography> */}
                        </>
                    ))}
                </Box>
            </Stack>
        </Stack>
    )
}