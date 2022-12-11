const months =[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const days =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

// Declaring the Date Object //
const date = new Date();

// Day
const day = date.getDay();
const Day =document.getElementById('day').innerHTML=days[day]

//Date
const dates =document.getElementById('date').innerHTML = date.getDate();

//Month //
const month = date.getMonth();
document.getElementById('month').innerHTML = months[month];

// Year //
const year = document.getElementById('year').innerHTML = date.getFullYear();




