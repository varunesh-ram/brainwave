import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DayOne from "./DayOne";
import DayTwo from "./DayTwo";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Agenda() {
    const [expanded, setExpanded] = React.useState(new Date().getDate === 25 ? 'day2' : 'day1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'day1'} onChange={handleChange('day1')}>
                <AccordionSummary aria-controls="day1-content" id="day1-header">
                    <Typography>Day 1 - 24th June</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <DayOne/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'day2'} onChange={handleChange('day2')}>
                <AccordionSummary aria-controls="day2-content" id="day2-header">
                    <Typography>Day 2 - 25th June</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <DayTwo/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}