import { PersonOutline, RoomService } from '@mui/icons-material'
import { Stack, Box } from '@mui/material'
import React, { useState } from 'react'
import home from './images/home.svg'
import user from './images/user.svg'
import services from './images/services.svg'
import portfolio from './images/portfolio.svg'
import contact from './images/contact.svg'

export default function Navbar() {
    const [active , setActive] = useState(home)
    const data = [home, user, services, portfolio, contact]

    const stack = {
        width : '20%',
        minWidth : '200px',
        display: 'flex',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: "center",
        gap: 2, 
        zIndex: 999,
        position: 'fixed',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50px',
        padding: '13px 30px',
        backdropFilter: 'blur(10px)',
        background: 'rgba(0, 0, 0, 0.3)'

    }
    const customIcon = { 
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent : 'center',
        padding: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        transition : '0.7s',
        '& img': {   
            width : '20px'
        }
    }

    const handleSetActive = (iconName) =>{
        setActive(iconName)
    }   
    return (
        <Stack sx={stack}>
            {data.map((item, index) => (
                <Box key={index} onClick={()=>handleSetActive(item)} sx={{...customIcon , backgroundColor : active == item ? '#4db5ff' : '','&:hover':{background : active == item ? '#4db5ff' : 'rgba(0, 0, 0, 0.5)'}}}>
                    <img src={item} />
                </Box>
            ))}
        
            {/* <Box sx={customIcon}>
                <img src={user}  />
            </Box>
            <Box sx={customIcon}>
                <img src={services}  />
            </Box>
            <Box sx={customIcon}>
                <img src={portfolio}  />
            </Box>
            <Box sx={customIcon}>
                <img src={contact}  />
            </Box> */}
        </Stack >
    )
}