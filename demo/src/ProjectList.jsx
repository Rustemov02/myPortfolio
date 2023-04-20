import React from 'react'
import { Button, Stack, Typography , Box} from '@mui/material'
import img1 from './images/portfolio1.jpg'

const projectData = [
    {
        image: img1,
        title: 'Lorem ipsum bir seyler  '
    }
]

export default function ProjectList() {



    return (
        <Stack border={1}>
            {projectData.map((item, index) => (

                <Stack key={index} border={1} borderColor='red' padding={2} width='fit-content'>
                    <img src={item.image} style={{width : 250}} alt='project'/>

                    <Typography>{item.title}</Typography>

                    <Box>
                        <Button variant='outlined'>Github</Button>
                        <Button variant='contained'>Live Demo</Button>
                    </Box>
                </Stack>

            ))}
        </Stack>
    )
}