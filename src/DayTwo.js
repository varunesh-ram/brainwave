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
import {returnCurrentEvent, returnFutureEvent, returnPastEvent} from "./utility";

export default function DayTwo() {
    const getColorProperty = (event, section) => {
        let dateToTest = 19;
        let currentDay = new Date().getDate();
        if (currentDay > dateToTest) {
            return returnPastEvent(section);
        } else if (currentDay === dateToTest) {
            let currentHour = 10;//new Date().getHours();
            let currentMinutes = 29//new Date().getMinutes();
            if (currentHour < 9) {
                return returnFutureEvent(section);
            } else if (currentHour >= 12) {
                return returnPastEvent(section);
            }
            if (event === "breakfast") {
                if (currentHour === 9) {
                    if (currentMinutes < 30) {
                        return returnCurrentEvent(section);
                    } else {
                        return returnPastEvent(section);
                    }
                } else {
                    return returnPastEvent(section);
                }

            } else if (event === "final") {
                if (currentHour < 10) {
                    return returnFutureEvent(section);
                } else if (currentHour === 10) {
                    return returnCurrentEvent(section);
                } else if (currentHour === 11) {
                    if (currentMinutes < 15) {
                        return returnCurrentEvent(section);
                    } else {
                        return returnPastEvent(section);
                    }
                } else {
                    return returnPastEvent(section);
                }
            } else if (event === "podium") {
                if (currentHour < 11) {
                    if (currentMinutes < 30) {
                        return returnFutureEvent(section);
                    } else {
                        return returnCurrentEvent(section);
                    }
                }
            }
        } else if (currentDay < dateToTest) {
            return returnFutureEvent(section);
        }
    }
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    align="right"
                    variant="body2"
                    color={getColorProperty("breakfast", "timeText")}
                >
                    9:00 - 9:30
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={getColorProperty("breakfast", "timeLineDot")}>
                        <FastfoodIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span" color={getColorProperty("breakfast", "text")}>
                        Breakfast
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color={getColorProperty("final", "timeText")}
                >
                    10:00 - 11:15
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={getColorProperty("final", "timeLineDot")}>
                        <GradingIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span" color={getColorProperty("final", "text")}>
                        Final Showdown
                    </Typography>
                    <Typography>PO of each team demos the MVP to the panelists</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color={getColorProperty("podium", "timeText")}
                >
                    11:30 - 12:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={getColorProperty("podium", "timeLineDot")}>
                        <EmojiEventsIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span" color={getColorProperty("podium", "text")}>
                        braiNWave 3.0 Podium
                    </Typography>
                    <Typography>results, awards & closing</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}