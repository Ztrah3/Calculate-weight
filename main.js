let result // Variable to store the weight calculation result
let gravityValue // Variable to store the gravity value of the selected planet
let image // Variable to store the image element
let output // Variable to store the selected planet name
let mass // Variable to store the mass input value


const planetArr = [
    // Array of planet objects with name and gravityValue properties
    {
        name: 'Mercury',
        gravityValue: 3.7
    },
    {
        name: 'Venus',
        gravityValue: 8.87
    },
    {
        name: 'Earth',
        gravityValue: 9.8
    },
    {
        name: 'Mars',
        gravityValue: 3.71
    },
    {
        name: 'Jupiter',
        gravityValue: 24.97
    },
    {
        name: 'Saturn',
        gravityValue: 10.44
    },
    {
        name: 'Uranus',
        gravityValue: 8.87
    },
    {
        name: 'Neptune',
        gravityValue: 11.15
    },
    {
        name: 'Pluto',
        gravityValue: 0.62
    },
    {
        name: 'Moon',
        gravityValue: 1.62
    }
]


const planetSelect = document.getElementById("planet") // Select element for planet selection


// Populate the select element with options for each planet
planetArr.forEach((planet) => {
    const option = document.createElement('option')
    option.textContent = planet.name
    option.value = planet.name
    option.id = planet.name


    planetSelect.add(option)
})


// Get the selected option from the select element
const getOption = () => {
    const selectElement = document.querySelector('#planet')
    output = selectElement.value


    const imageUrl = `https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/${output.toLowerCase()}.png`
    image = document.createElement('img')
    image.src = imageUrl
    removeImage() // Call removeImage function before appending the new image
    document.body.appendChild(image)


    gravityValue = planetArr.find((planet) => planet.name === output)?.gravityValue || 0
}


// Remove the displayed image
const removeImage = () => {
    if (image) {
        image.remove()
    }
};


// Save the mass input value
const saveMass = () => {
    const input = document.getElementById('mass').value
    mass = parseFloat(input)
    console.log(mass)
};


// Remove the existing weight output
const removeH1 = () => {
    const removeH1 = document.getElementById('output')
    removeH1.parentNode.removeChild(removeH1)
}


// Calculate the weight based on the mass and gravity value and handle potential errors
const calculate = () => {
    const existingError = document.querySelector('.error')
    if (existingError) {
        existingError.remove()
    }

    if (!output) {
        showError("Please select a planet")
        return
    }

    if (isNaN(mass)) {
        showError("Please enter a valid numerical value for mass")
        return
    }

    let weight = mass * gravityValue
    const existingH1 = document.getElementById('output')

    if (existingH1) {
        existingH1.remove()
    }

    result = document.createElement('h1')
    result.id = 'output'
    result.textContent = 'The weight of your object would be ' + weight + 'N on ' + output
    document.body.appendChild(result)
};

// Show an error message
const showError = (message) => {
    const existingError = document.querySelector('.error')
    if (existingError) {
        existingError.remove()
    }

    const errorH1 = document.createElement('h1')
    errorH1.textContent = message
    errorH1.style.color = 'red'
    errorH1.classList.add('error')
    document.body.appendChild(errorH1)
}