import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import me from './images/me.png'
import myImg from './images/myImage.jpeg'

export default function Profil() {

    const customImg = {
        width: '100%',
        minWidth: '210px',
        borderRadius: '12px',
        padding : '12px 10px',
        backgroundImage: 'linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%)'
}

return (
    <Stack>
        <Stack gap={1} alignItems='center'>
            <Typography fontFamily='Poppins' fontSize={20} color='#FFFFFF' fontWeight={600}>Hello I'm</Typography>
            <Typography fontFamily='Poppins' fontSize={44} color='#FFFFFF' fontWeight={600}>Benjamin</Typography>
            <Typography fontFamily='Poppins' fontSize={18} color='#FFFFFF99' fontWeight={500}>Front End Developer</Typography>
        </Stack>

        <Stack>
            {/* <Box sx={{ width: '25%', minWidth: '250px' }}>
                <img src={myImg} style={customImg} />
            </Box> */}
        </Stack>
    </Stack>
)
}