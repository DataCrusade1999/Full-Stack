// This fucntion is an example of github copilot program


function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var days = Math.round((endDate - beginDate) / (24 * 60 * 60 * 1000));
    return days;
}

console.log(calculateDaysBetweenDates("2016-01-01", "2016-01-31"));