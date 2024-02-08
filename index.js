const inputsDiv = document.querySelectorAll('.input-container')
const button = document.querySelector('#button')
const day = document.querySelector('#day-input')
const month = document.querySelector('#month-input')
const year = document.querySelector('#year-input')
const yearsTxt = document.querySelector('#years')
const monthsTxt = document.querySelector('#months')
const daysTxt = document.querySelector('#days')
const errMsgDay = document.querySelector('#err-day')





// Gets the current year constructing the Date().
const currentDate = new Date()
const currentYear = currentDate.getFullYear()



// Function that gets the total days in a month for a given year and month
const validateDayOfMonth = (year, month) => {
    const getLastDay = (y, m) => new Date(y, m, 0).getDate();
    return getLastDay(year, month);
}



// Handles validation for non-empty and numeric input fields, displaying appropriate error messages.
const handleValidInput = (inputs, div, errMessage) => {
    if (inputs.value.length === 0) {
        handleError(div, errMessage, 'This field is required')
    }
    else if (isNaN(inputs.value)) {
        handleError(div, errMessage, 'Please enter a valid value')
    }
    else {
        errMessage.style.display = 'none';
        div.classList.remove('active')
    }

}



//function that Validates day, month, or year inputs and displays error messages.
const handleValidDate = (inputs, div, errMessage) => {


    if (inputs.id === 'day-input') {
        if ( parseInt(inputs.value) <= 0) {
            handleError(div, errMessage, 'Must be a valid day')
        }
    } else if (inputs.id === 'month-input') {
        if (inputs.value > 12 || parseInt(inputs.value) <= 0) {
            handleError(div, errMessage, 'Must be a valid month')
        }
    } else {
        if (inputs.value > currentYear) {
            handleError(div, errMessage, 'Must be in the past')
        }
    }
}




//
const calculateAge = (div,errMessage) => {

    const insertedDate = new Date(`${month.value}/${day.value}/${year.value}`)
    const daysInMonth = validateDayOfMonth(year.value, month.value)

    //compare the value of day input with the total days in months ex: 31/06/yyyy => 31 > 30 (total days in june)
    if (day.value>daysInMonth) {
        handleError(div,errMsgDay,'invalid day')
    }else if ((insertedDate > currentDate)) {
        handleError(div,errMessage,'muste be in the past')

    }
    else {
       const age = new Date(currentDate - insertedDate);
        const years = age.getUTCFullYear() - 1970
        const months = age.getUTCMonth()
        const days = age.getUTCDate() - 1
        yearsTxt.innerHTML = years || '--'
        monthsTxt.innerHTML = months || '--'
        daysTxt.innerHTML = days || '--' 
    }
        

}



//function that Displays an error message on the specified element.
const handleError = (element, errMessage, message) => {
    element.classList.add('active')
    errMessage.style.display = 'block';
    errMessage.innerHTML = message
}



const handleButtonClick = () => {
    inputsDiv.forEach((div, idx) => {
        //get all inputs
        const inputs = div.children[1]
        //get the span element for error messages to set
        const errMessage = div.children[2];
        handleValidInput(inputs, div, errMessage)

        handleValidDate(inputs, div, errMessage)

        calculateAge(div,errMessage)

    })
}




button.addEventListener('click', handleButtonClick)