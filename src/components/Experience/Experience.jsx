import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'
import certificate from '../../assets/images/certificate.jpeg'
import data from './ExperienceData'

export default function Experience() {
 
    return (
        <Box sx={{ py: 10, display: "flex", flexDirection: "row", justifyContent: "center", '@media (max-width : 1170px)': { flexDirection: "column" } }}>
            {data.map((item, index) => (
                <Stack key={index} direction='column' flexWrap='wrap' width='45%' sx={{ '@media (max-width : 1170px)': { width: '100%' } }}>

                    <Typography fontFamily='Quicksand' textAlign='center' paddingLeft={10} fontWeight={600} fontSize="32px" color="#87989b" marginBottom={2}>{item.title}</Typography>

                    <VerticalTimeline>
                        {item.timeline.map((line, key) => (
                            <VerticalTimelineElement
                                key={key}
                                position='left'
                                contentArrowStyle={{
                                    display: "none"
                                }}
                                contentStyle={{
                                    backgroundColor: '#2c2c6c',
                                    borderRadius: '12px',
                                    color: "#FFF",
                                    minWidth: '120px',
                                    padding: '25px',
                                }}
                                date={line.date}
                                dateClassName='date'
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            >
                                <h5 style={{ fontSize: '30px', fontFamily: 'Poppins' }} >{line.description}</h5>
                                <h4 style={{ fontSize: '20px', fontFamily: 'Poppins' }}>{line.degree}</h4>
                                <p style={{ fontSize: "20px" }}>
                                    {line.title}
                                </p>
                                {line.certificate ? <Button href={certificate} download variant='contained' sx={{ marginTop: 2, top: '80%', height: '30px', color: '#1F1F38', fontSize: '15px', backgroundColor: '#4DB5FF', textTransform: 'capitalize', '&:hover': { backgroundColor: "#FFF", color: 'black' } }} >See Certificate</Button> : ''}
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </Stack>
            ))}
        </Box>
    )
}




