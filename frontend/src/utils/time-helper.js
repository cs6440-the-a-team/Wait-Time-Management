import moment from "moment";

function formatTime({days = 0, hours = 0, minutes = 0, seconds = 0, microseconds = 0}) {
    microseconds = parseInt(microseconds), 
    seconds = parseInt(seconds), 
    minutes=parseInt(minutes), 
    hours = parseInt(hours), 
    days = parseInt(days);

    if (microseconds >= 1000) {
        seconds += Math.floor(microseconds / 1000);
        microseconds = microseconds % 1000;
    }
    if (seconds >= 60) {
        minutes += Math.floor(seconds / 60);
        seconds = seconds % 60;
    }
    if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes = minutes % 60;
    }
    if (hours >= 24) {
        days += Math.floor(hours / 24);
        hours = hours % 24;
    }

    let timeStr = "";
    if (days) {
        timeStr += `${days} day${days === 1 ? "" : "s"}`
    }
    if (hours) {
        timeStr += ` ${hours} hour${hours === 1 ? "" : "s"}`
    }
    if (minutes) {
        timeStr += ` ${minutes} min${minutes === 1 ? "" : "s"}`
    }
    if (seconds) {
        timeStr += ` ${seconds} sec${seconds === 1 ? "" : "s"}`
    }

    return timeStr.trim();
}

function minutesSince(date_time_string, suffix=false) {
    return moment().diff(date_time_string, 'minutes');
}

export {formatTime, minutesSince};