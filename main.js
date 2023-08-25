let result
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

