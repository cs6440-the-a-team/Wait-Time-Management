import moment from "moment"
import {minutesSince, formatTime} from "./time-helper"

test('minutesSince', () => {
    let min = minutesSince(moment().subtract(5, 'minutes'));
    expect(min).toBe(5);

    min = minutesSince(moment().subtract(60, 'minutes'));
    expect(min).toBe(60);

    min = minutesSince(moment().subtract(5, 'hours'));
    expect(min).toBe(300);

    min = minutesSince(moment().subtract(1, 'minutes'));
    expect(min).toBe(1);
});

test('formatTime', () => {
    let formatted = formatTime({minutes: 60});
    expect(formatted).toBe("1 hour");

    formatted = formatTime({minutes: 125});
    expect(formatted).toBe("2 hours 5 mins");

    formatted = formatTime({minutes: null});
    expect(formatted).toBe("");
});