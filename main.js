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









/*let result
let gravityValue
let image
let output
let mass



const planetArr = [
    {
        name: 'Mercury'
    },
    {
        name: 'Venus'
    },
    {
        name: 'Earth'
    },
    {
        name: 'Mars'
    },
    {
        name: 'Jupiter'
    },
    {
        name: 'Saturn'
    },
    {
        name: 'Uranus'
    },
    {
        name: 'Neptune'
    },
    {
        name: 'pluto'
    },
    {
        name: 'Moon'
    }
]


planetArr.forEach((element) => {
    let planetSelect = document.getElementById("planet")
    let option = document.createElement('option')
    option.textContent = element.name
    option.value = element.name
    option.id = element.name

    planetSelect.add(option)
})


function getOption() {
    selectElement = document.querySelector('#planet');
    output = selectElement.value;
    if (output === 'Mercury') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/mercury.png'
        document.body.appendChild(image)
        gravityValue = 3.7
    } else if (output === 'Venus') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/venus.png'
        document.body.appendChild(image)
        gravityValue = 8.87
    } else if (output === 'Earth') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/earth.png'
        document.body.appendChild(image)
        gravityValue = 9.8
    } else if (output === 'Mars') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/mars.png'
        document.body.appendChild(image)
        gravityValue = 3.71
    } else if (output === 'Jupiter') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/jupiter.png'
        document.body.appendChild(image)
        gravityValue = 24.97
    } else if (output === 'Jupiter') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/jupiter.png'
        document.body.appendChild(image)
        gravityValue = 24.97
    } else if (output === 'Saturn') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/saturn.png'
        document.body.appendChild(image)
        gravityValue = 10.44
    } else if (output === 'Uranus') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/uranus.png'
        document.body.appendChild(image)
        gravityValue = 8.87
    } else if (output === 'Neptune') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/neptune.png'
        document.body.appendChild(image)
        gravityValue = 11.15
    } else if (output === 'pluto') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/pluto.png'
        document.body.appendChild(image)
        gravityValue = 0.62
    } else if (output === 'Moon') {
        image = document.createElement('img')
        image.src = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/24_Day_Project_solar_system/24_day_starter/images/moon.png'
        document.body.appendChild(image)
        gravityValue = 1.62
    }
}

function removeImage() {
    let remove = document.querySelector('body')
    remove.removeChild(image)


}


function saveMass() {
    let input = document.getElementById('mass').value
    mass = parseFloat(input)
    console.log(mass)
}


function removeH1() {
    let removeH1 = document.getElementById('output')
    removeH1.removeChild(removeH1)
}




function calculate() {
    let weight = mass * gravityValue
    const existingH1 = document.getElementById('output')


    if (existingH1) {
        existingH1.remove()
    }
    result = document.createElement('h1')
    result.id = 'output'
    result.textContent = 'The weight of your object would be ' + weight + 'N on ' + output
    document.body.appendChild(result)


}
*/
