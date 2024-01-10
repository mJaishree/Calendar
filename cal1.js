// Function to get the first day of the month
function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

// Retrieve today's date
let today = new Date();
let thisDate = today.getDate();
let thisMonth = today.getMonth();
let thisYear = today.getFullYear();

// Array of month names
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// Update current month and year
let monthName = document.getElementById('month_name');
let yearName = document.getElementById('year_name');
monthName.innerText = months[thisMonth];
yearName.innerText = thisYear;

// Generate calendar table
let tableElement = document.getElementById('monthly_calendar');
let tbodyElement = tableElement.getElementsByTagName('tbody')[0];
let targetRow = 0;
let firstDay = firstDayOfMonth(today);

// Determine number of days in the month
let daysInMonth = new Date(thisYear, thisMonth + 1, 0).getDate();

for (let i = 1; i <= daysInMonth; i++) {
    let currentRowElement = tbodyElement.getElementsByTagName('tr')[targetRow];
    let currentCellElement = currentRowElement.getElementsByTagName('td')[(i + firstDay - 1) % 7];

    currentCellElement.innerText = i;

    if ((i + firstDay) % 7 === 0) {
        targetRow++;
    }
}

// Previous button functionality to get previous month details
function handlePrevClick() {
    thisMonth--;
    if (thisMonth < 0) {
        thisMonth = 11;
        thisYear--;
    }
    monthName.innerText = months[thisMonth];
    yearName.innerText = thisYear;

    updateCalendar();
}

let prevElement = document.getElementById('prev');
prevElement.addEventListener('click', handlePrevClick);

// Next button functionality to get next month details
function handleNextClick() {
    thisMonth++;
    if (thisMonth > 11) {
        thisMonth = 0;
        thisYear++;
    }
    monthName.innerText = months[thisMonth];
    yearName.innerText = thisYear;

    updateCalendar();
}

let nextElement = document.getElementById('next');
nextElement.addEventListener('click', handleNextClick);

function updateCalendar() {
    // Clear existing calendar
    let allCells = document.querySelectorAll('#monthly_calendar tbody td');
    allCells.forEach(cell => {
        cell.innerText = '';
    });

    // Determine first day and number of days in the month
    let firstDay = firstDayOfMonth(new Date(thisYear, thisMonth, 1));
    let daysInMonth = new Date(thisYear, thisMonth + 1, 0).getDate();

    let targetRow = 0;
    for (let i = 1; i <= daysInMonth; i++) {
        let currentRowElement = tbodyElement.getElementsByTagName('tr')[targetRow];
        let currentCellElement = currentRowElement.getElementsByTagName('td')[(i + firstDay - 1) % 7];

        currentCellElement.innerText = i;

        if ((i + firstDay) % 7 === 0) {
            targetRow++;
        }
    }
}
