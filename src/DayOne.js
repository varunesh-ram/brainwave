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
import Typography from '@mui/material/Typography';
import {returnCurrentEvent, returnFutureEvent, returnPastEvent} from "./utility";

export default function DayOne() {

    const getColorProperty = (event, section) => {
        let dateToTest = 19;
        let currentDay = new Date().getDate();
        if (currentDay > dateToTest) {
            return returnPastEvent(section);
        } else if (currentDay === dateToTest) {
            let currentHour = 12;//new Date().getHours();
            let currentMinutes = 29//new Date().getMinutes();
            if (currentHour < 9) {
                return returnFutureEvent(section);
            } else if (currentHour >= 18) {
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

            } else if (event === "opening") {
                if (currentHour === 9) {
                    if (currentMinutes > 29) {
                        return returnCurrentEvent(section);
                    } else {
                        return returnFutureEvent(section);
                    }
                } else {
                    return returnPastEvent(section);
                }
            } else if (event === "pitch") {
                if (currentHour < 10) {
                    return returnFutureEvent(section);
                } else if (currentHour === 10) {
                    if (currentMinutes < 30) {
                        return returnCurrentEvent(section);
                    } else {
                        return returnPastEvent(section);
                    }
                } else {
                    return returnPastEvent(section);
                }
            } else if (event === "lunch") {
                if (currentHour < 12) {
                    returnFutureEvent(section);
                } else if (currentHour === 12) {
                    return returnCurrentEvent(section);
                } else {
                    return returnPastEvent(section);
                }
            } else if (event === "yoga") {
                if (currentHour < 13) {
                    return returnFutureEvent(section);
                } else if (currentHour === 13) {
                    if (currentMinutes < 30) {
                        return returnFutureEvent(section);
                    } else {
                        return returnCurrentEvent(section);
                    }
                } else {
                    return returnPastEvent(section);
                }
            } else if (event === "pitstop") {
                if (currentHour < 15) {
                    return returnFutureEvent(section);
                } else if (currentHour === 15) {
                    return returnCurrentEvent(section);
                } else {
                    return returnPastEvent(section);
                }
            } else if (event === "laugh") {
                if (currentHour < 16) {
                    return returnFutureEvent(section);
                } else if (currentHour === 16) {
                    if (currentMinutes < 45) {
                        return returnFutureEvent(section);
                    } else {
                        return returnCurrentEvent(section);
                    }
                } else if (currentHour === 17) {
                    if (currentMinutes < 30) {
                        return returnCurrentEvent(section);
                    } else {
                        return returnPastEvent(section);
                    }
                }
            } else if (event === "end") {
                if (currentHour < 18) {
                    return returnFutureEvent(section);
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
                    {/*<Typography>Because you need strength</Typography>*/}
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color={getColorProperty("opening", "timeText")}
                >
                    9:30 - 10:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={getColorProperty("opening", "timeLineDot")}>
                        <MeetingRoomIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span" color={getColorProperty("opening", "text")}>
                        Opening-Shots
                    </Typography>
                    <Typography>Keynote from Chief guest</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color={getColorProperty("pitch", "timeText")}
                >
                    10:00 - 10:30
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={getColorProperty("pitch", "timeLineDot")}>
                        <LaptopMacIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span" color={getColorProperty("pitch", "text")}>
                        Breakfast Pitch
                    </Typography>
                    <Typography>PO of each team explains key features of the use case to team of
                        panelists</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color={getColorProperty("lunch", "timeText")}
                >
                    12:00 - 13:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={getColorProperty("lunch", "timeLineDot")}>
                        <LunchDiningIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span" color={getColorProperty("lunch", "text")}>
                        Lunch
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color={getColorProperty("yoga", "timeText")}
                >
                    13:30 - 14:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={getColorProperty("yoga", "timeLineDot")}>
                        <SelfImprovementIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span" color={getColorProperty("yoga", "text")}>
                        Yog-a-thon
                    </Typography>
                    <Typography>Experience Yoga like never before from an expert</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color={getColorProperty("pitstop", "timeText")}
                >
                    15:00 - 16:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={getColorProperty("pitstop", "timeLineDot")}>
                        <CoPresentIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span" color={getColorProperty("pitstop", "text")}>
                        Afternoon Pitstop
                    </Typography>
                    <Typography>PO of each team provides WIP demo of the use case to team of panelists</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color={getColorProperty("laugh", "timeText")}
                >
                    16:45 - 17:30
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={getColorProperty("laugh", "timeLineDot")}>
                        <TheaterComedyIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span" color={getColorProperty("laugh", "text")}>
                        Laugh-a-thon
                    </Typography>
                    <Typography>Stand-up comedy</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    variant="body2"
                    color={getColorProperty("end", "timeText")}
                >
                    18:00
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={getColorProperty("end", "timeLineDot")}>
                        <AssignmentTurnedInIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span" color={getColorProperty("end", "text")}>
                        End of day 1
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}