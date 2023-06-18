import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GradingIcon from '@mui/icons-material/Grading';
import Typography from '@mui/material/Typography';

export default function DayTwo() {
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
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color="#757de8"
                >
                    10:00 - 11:15
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color="primary">
                        <GradingIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        Final Showdown
                    </Typography>
                    <Typography>PO of each team demos the MVP to the panelists</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color="#757de8"
                >
                    11:30 - 12:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color="primary">
                        <EmojiEventsIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        braiNWave 3.0 Podium
                    </Typography>
                    <Typography>results, awards & closing</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}