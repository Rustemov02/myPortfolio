import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'

export default function Experience() {
    const data = [
        {
            title: 'Education',
            timeline: [
                {
                    date: "2019/2023",
                    description: 'Azerbaijan State Oil and Industry University',
                    degree: 'Bachelor\'s degree ',
                    title: 'Computer Engineering'
                }
            ]
        },
        {
            title: "Experience",
            timeline: [
                {
                    date: '10/2022-01/2023',
                    description: "Job",
                    title: "Frontend Developer trainer in the 'Ucode' course",
                    certificate: ''
                },
                {
                    date: '09/2022-12/2022',
                    description: 'Intern',
                    title: 'Junior Frontend Developer at Algorithm',
                    certificate: ''
                },
                {
                    date: '02/2022-06/2022',
                    description: 'Bootcamp',
                    title: '"codeforfuture" Front End Bootcamp at ASOIU',
                    certificate: 'certicate'
                }
            ]
        }
    ]

    return (
        <Stack gap={7} py={7}>

            <Box textAlign='center'>
                <Typography fontSize='14px' color="#FFFFFF99" fontFamily='Poppins'>What Skills I Have</Typography>
                <Typography fontSize='24px' variant='h2' color='#4db5ff' fontFamily='Poppins'>My Experiences</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", '@media (max-width : 1170px)': { flexDirection: "column" } }}>
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
                                    {line.certificate ? <Button variant='contained' sx={{marginTop : 2,top : '80%',height: '30px', color: '#1F1F38', fontSize: '15px', backgroundColor: '#4DB5FF', textTransform: 'capitalize', '&:hover': { backgroundColor: "#FFF", color: 'black' } }} >See Certificate</Button> : ''}
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </Stack>
                ))}

            </Box>




            {/* <Stack  border={1} width='50%' sx={{'@media (max-width : 1170px)': {width : '100%'}}}>


                <VerticalTimeline>
                    <VerticalTimelineElement
                        style={{ border: "solid red 1px" }}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        dateClassName='date'
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>



            </Stack> */}
        </Stack >
    )
}




{/* <Timeline position="right" sx={{ border: 'solid red 1px', width: 'auto' }}>
                            {item.timeline.map((line, key) => (

                                <TimelineItem >

                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ marginTop: '10px', width: '100%' }}>
                                        <Typography component="span" sx={{
                                            fontSize: "18px",
                                            border: "solid blue 1px",
                                            padding: '15px 18px',
                                            backgroundColor: '#4db5ff',
                                            borderRadius: '15px',
                                        }}>
                                            {line.date}
                                        </Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: "flex-start",
                                            backgroundColor: '#2c2c6c',
                                            borderRadius: '12px',
                                            color: "#FFF",
                                            marginTop: "20px",
                                            // width: '430px',
                                            width: "100%",
                                            minWidth: '120px',
                                            padding: '25px',
                                        }}>
                                            <Typography fontSize='25px' fontFamily='Poppins'>{line.description}</Typography>
                                            <Typography fontSize="16px" fontFamily='Quicksand' color="#17deff">{line.degree}</Typography>
                                            <Typography fontSize="20px" fontFamily='Quicksand'>{line.title}</Typography>
                                        </Box>
                                    </TimelineContent>
                                </TimelineItem>

                            ))}
                        </Timeline> */}


