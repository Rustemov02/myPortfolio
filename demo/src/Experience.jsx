import React from 'react'
import { Stack, Box } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';


export default function Experience() {


    return (
        <Stack gap={7}>
            <Box textAlign='center'>
                <Typography fontSize='14px' color="#FFFFFF99" fontFamily='Poppins'>What Skills I Have</Typography>
                <Typography fontSize='24px' variant='h2' color='#4db5ff' fontFamily='Poppins'>My Experiences</Typography>
            </Box>

            <Stack direction='row' justifyContent='center'>


                <Stack direction='column' alignItems='flex-start' sx={{ width: '40%' }}>
                    <Typography fontFamily='Quicksand' fontWeight={500} fontSize="32px" color="#87989b" marginBottom={2}>Education</Typography>

                    <Timeline position="right">


                        <TimelineItem sx={{ width: '70%' }}>

                            <TimelineSeparator >
                                {/* <TimelineConnector /> */}
                                <TimelineDot>
                                    {/* <FastfoodIcon /> */}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent>
                                <Typography component="span"
                                    sx={{
                                        fontSize: "18px",
                                        border: "solid blue 1px",
                                        padding: '15px 18px',
                                        backgroundColor: '#4db5ff',
                                        borderRadius: '15px'
                                    }}>
                                    2019/2023
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: "flex-start",
                                        backgroundColor: '#2c2c6c',
                                        borderRadius: '12px',
                                        color: "#FFF",
                                        marginTop: "20px",
                                        width: '320px',
                                        padding: '10px 15px',
                                    }}>
                                    <Typography fontSize='20px' fontFamily='Poppins'>Azerbaijan State Oil and Industry University</Typography>
                                    <Typography fontSize="16px" fontFamily='Quicksand' color="#17deff">Bachelor's degree</Typography>
                                    <Typography fontSize="18px" fontFamily='Quicksand'>Computer Engineering</Typography>
                                </Box>
                            </TimelineContent>


                        </TimelineItem>



                    </Timeline>
                </Stack>


                <Stack direction='column' alignItems='flex-start' sx={{ width: '40%' }}>
                    <Typography fontFamily='Quicksand' fontWeight={500} fontSize="32px" color="#87989b" marginBottom={2}>Experience</Typography>

                    <Timeline position="right" sx={{ gap: 3 }}>


                        <TimelineItem sx={{ width: '70%' }}>

                            <TimelineSeparator >
                                {/* <TimelineConnector /> */}
                                <TimelineDot>
                                    {/* <FastfoodIcon /> */}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent>
                                <Typography component="span"
                                    sx={{
                                        fontSize: "18px",
                                        border: "solid blue 1px",
                                        padding: '15px 18px',
                                        backgroundColor: '#4db5ff',
                                        borderRadius: '15px'
                                    }}>
                                    2019/2023
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: "flex-start",
                                        backgroundColor: '#2c2c6c',
                                        borderRadius: '12px',
                                        color: "#FFF",
                                        marginTop: "20px",
                                        width: '320px',
                                        padding: '10px 15px',
                                    }}>
                                    <Typography fontSize='20px' fontFamily='Poppins'>Azerbaijan State Oil and Industry University</Typography>
                                    <Typography fontSize="16px" fontFamily='Quicksand' color="#17deff">Bachelor's degree</Typography>
                                    <Typography fontSize="18px" fontFamily='Quicksand'>Computer Engineering</Typography>
                                </Box>
                            </TimelineContent>


                        </TimelineItem>

                        <TimelineItem sx={{ width: '70%' }}>

                            <TimelineSeparator >
                                {/* <TimelineConnector /> */}
                                <TimelineDot>
                                    {/* <FastfoodIcon /> */}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent>
                                <Typography component="span"
                                    sx={{
                                        fontSize: "18px",
                                        border: "solid blue 1px",
                                        padding: '15px 18px',
                                        backgroundColor: '#4db5ff',
                                        borderRadius: '15px'
                                    }}>
                                    2019/2023
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: "flex-start",
                                        backgroundColor: '#2c2c6c',
                                        borderRadius: '12px',
                                        color: "#FFF",
                                        marginTop: "20px",
                                        width: '320px',
                                        padding: '10px 15px',
                                    }}>
                                    <Typography fontSize='20px' fontFamily='Poppins'>Azerbaijan State Oil and Industry University</Typography>
                                    <Typography fontSize="16px" fontFamily='Quicksand' color="#17deff">Bachelor's degree</Typography>
                                    <Typography fontSize="18px" fontFamily='Quicksand'>Computer Engineering</Typography>
                                </Box>
                            </TimelineContent>


                        </TimelineItem>

                        <TimelineItem sx={{ width: '70%' }}>

                            <TimelineSeparator >
                                {/* <TimelineConnector /> */}
                                <TimelineDot>
                                    {/* <FastfoodIcon /> */}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent>
                                <Typography component="span"
                                    sx={{
                                        fontSize: "18px",
                                        border: "solid blue 1px",
                                        padding: '15px 18px',
                                        backgroundColor: '#4db5ff',
                                        borderRadius: '15px'
                                    }}>
                                    2019/2023
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: "flex-start",
                                        backgroundColor: '#2c2c6c',
                                        borderRadius: '12px',
                                        color: "#FFF",
                                        marginTop: "20px",
                                        width: '320px',
                                        padding: '10px 15px',
                                    }}>
                                    <Typography fontSize='20px' fontFamily='Poppins'>Azerbaijan State Oil and Industry University</Typography>
                                    <Typography fontSize="16px" fontFamily='Quicksand' color="#17deff">Bachelor's degree</Typography>
                                    <Typography fontSize="18px" fontFamily='Quicksand'>Computer Engineering</Typography>
                                </Box>
                            </TimelineContent>


                        </TimelineItem>



                    </Timeline>

                </Stack>
            </Stack>
        </Stack>
    )
}