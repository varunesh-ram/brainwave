import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function DayOne() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    align="right"
                    variant="body2"
                    color="#757de8"
                >
                    9:00 - 9:30
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={"primary"}>
                        <FastfoodIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        Breakfast
                    </Typography>
                    {/*<Typography>Because you need strength</Typography>*/}
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color="#757de8"
                >
                    9:30 - 10:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color="primary">
                        <MeetingRoomIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        Opening-Shots
                    </Typography>
                    <Typography>Keynote from Chief guest</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color="#757de8"
                >
                    10:00 - 10:30
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color="primary">
                        <LaptopMacIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        Breakfast Pitch
                    </Typography>
                    <Typography>PO of each team explains key features of the use case to team of panelists</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color="#757de8"
                >
                    12:00 - 13:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color="primary">
                        <LunchDiningIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        Lunch
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color="#757de8"
                >
                    13:30 - 14:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color="primary">
                        <SelfImprovementIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        Yog-a-thon
                    </Typography>
                    <Typography>Experience Yoga like never before from an expert</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color="#757de8"
                >
                    15:00 - 16:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color="primary">
                        <CoPresentIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        Afternoon Pitstop
                    </Typography>
                    <Typography>PO of each team provides WIP demo of the use case to team of panelists</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color="#757de8"
                >
                    16:45 - 17:30
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color="primary">
                        <TheaterComedyIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        Laugh-a-thon
                    </Typography>
                    <Typography>Stand-up comedy</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color="#757de8"
                >
                    18:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color="primary">
                        <AssignmentTurnedInIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        End of day 1
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}