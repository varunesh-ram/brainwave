export const returnPastEvent = (section) => {
    if (section === "timeText") {
        return "#bdbdbd";
    } else if (section === "timeLineDot") {
        return "grey";
    } else if (section === "text"){
        return "grey"
    }
}
export const returnFutureEvent = (section) => {
    if (section === "timeText") {
        return "#757de8";
    } else if (section === "timeLineDot") {
        return "primary";
    }else if (section === "text") {
        return "primary";
    }
}
export const returnCurrentEvent = (section) => {
    if (section === "timeText") {
        return "#2e7d32";
    } else if (section === "timeLineDot") {
        return "success";
    }
    else if (section === "text") {
        return "secondary";
    }
}