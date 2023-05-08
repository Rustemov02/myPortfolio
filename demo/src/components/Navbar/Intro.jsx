import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react' 
import cv from '../../assets/FrontEnd_Resume.pdf'
import { Link as ScrollLink } from 'react-scroll'
import SvgIntroImg from '../../assets/icon/IntroImg'

const styles = {
    common: {
        color: "#fff",
        width: '50%',
        minWidth: '270px',
        minHeight: '400px',
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center ',
        alignItems: "flex-start",
        padding: '4px 5px',
        '@media (max-width : 800px)': {
            width: "90%"
        }
    },
    button: {
        textTransform: 'capitalize',
        transition: '0.7s',
        color: 'black',
        backgroundColor: '#61DAFB',
        fontSize: '18px',
        '&:hover': { backgroundColor: "#FFF", color: 'black' }
    },
    header: {
        fontFamily: 'Open Sans, sans-serif',
    },
    text: {
        fontFamily: 'Montserrat , sans-serif',
        fontWeight: 600,
    },
    title: {
        fontFamily: "Quicksand"
    }
};

export default function Intro() {

    const Emoji = props => (
        <span
            role="img"
            style={{ fontSize: '40px' }}
        >
            {props.symbol}
        </span>
    );

    return (
        <Box sx={{ marginTop: '40px', display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "center", '@media (max-width : 800px)': { flexDirection: 'column-reverse' } }}>
            <Stack direction='column' alignItems='center' gap={1} sx={styles.common}>
                <Stack direction='row' alignItems='center'>
                    <Typography variant='h4' sx={styles.header}>Hi,</Typography><Emoji symbol="👋" />
                </Stack> 
                <Typography sx={{ ...styles.text, fontSize: '55px' }}>I'm <span style={{ color: '#61DAFB' }}>Benjamin</span> Rustamov</Typography>
                <Typography sx={{ ...styles.title, fontSize: '30px', fontWeight: 900, color: '#88abbd' }}>Front End Developer</Typography>
                <Stack sx={{ '@media ( max-width : 1055px)': {} }} direction='row' gap={2} my={2}>
                    <Button href={cv} download size='medium' variant='contained' sx={styles.button}>Download CV</Button>
                    <ScrollLink to='contact' smooth={true} duration={1000}>
                        <Button size='medium' variant='contained' sx={styles.button} >Let's Talk</Button>
                    </ScrollLink>
                </Stack>
            </Stack>
            <Box sx={{
                width: "20%", minWidth: '340px',
                '@media (max-width : 800px)': {
                    display: "none"
                }
            }}> 
                <SvgIntroImg /> 
            </Box>
        </Box>
    )
}