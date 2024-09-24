import { Stack, Box } from '@mui/material'
import React, { useState } from 'react' 
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
    const [active, setActive] = useState("home")
    const data = ["home",'about', "portfolio","services","contact"]
    const icons = {
        home: require('../../assets/home.svg').default,
        about : require('../../assets/about.svg').default,
        user: require('../../assets/user.svg').default,
        services: require('../../assets/services.svg').default,
        portfolio: require('../../assets/portfolio.svg').default,
        contact: require('../../assets/contact.svg').default,
    } 
    const stack = { 
        width: '15%',
        display: 'flex',
        minWidth : 'fit-content',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: 1,
        zIndex: 999,
        position: 'fixed',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50px',
        padding: '13px 30px ',
        backdropFilter: 'blur(10px)',
        background: 'rgba(0, 0, 0, 0.3)'

    }
    const customIcon = { 
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        padding: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: '0.7s', 
        '& img': {
            width: '20px'
        }
    } 
    const handleSetActive = (iconName) => {
        setActive(iconName)
    }

    return (
        <Stack sx={stack}>
            {data.map((item, index) => (
                <ScrollLink key={index} to={item.toLowerCase()} smooth={true} duration={500}>
                    <Box onClick={() => handleSetActive(item)} sx={{ ...customIcon, backgroundColor: active == item ? '#4db5ff' : '', '&:hover': { background: active == item ? '#4db5ff' : 'rgba(0, 0, 0, 0.5)' } }}>
                        <img src={icons[item]} alt={item} />    
                    </Box>
                </ScrollLink>
            ))}

        </Stack >
    )
}