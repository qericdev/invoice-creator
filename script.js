
let myServicesAdded = []
let positionWash
let positionMow
let positionPull
let totalSum = 0

let washServiceAdded = false
let mowServiceAdded = false
let pullServiceAdded = false

function addServiceWash() {
    if(washServiceAdded === false) {
        myServicesAdded.push(`<div><p class="serviceAdded">Wash Car</p> <p onclick="removeWash()" class="removeService">Remove</p> <p class="servicePrice"><span>$</span>10</p></div>`)
        positionWash = myServicesAdded.length - 1
        document.getElementById("chosenServices").innerHTML += myServicesAdded[myServicesAdded.length-1]
        totalSum += 10
        document.getElementById("totalSumValue").innerHTML = totalSum
        washServiceAdded = true
    }
    if(totalSum !== 0) {
        document.getElementById("waysToPay").textContent = "We accept cash, credit card, or PayPal"
    } else {
        document.getElementById("waysToPay").textContent = ""
    }
}

function addServiceMow() {
    if(mowServiceAdded === false) {
        myServicesAdded.push(`<div><p class="serviceAdded">Mow Lawn</p> <p onclick="removeMow()" class="removeService">Remove</p> <p class="servicePrice"><span>$</span>20</p></div>`)
        positionMow = myServicesAdded.length - 1
        document.getElementById("chosenServices").innerHTML += myServicesAdded[myServicesAdded.length-1]
        totalSum += 20
        document.getElementById("totalSumValue").innerHTML = totalSum
        mowServiceAdded = true
    }
    if(totalSum !== 0) {
        document.getElementById("waysToPay").textContent = "We accept cash, credit card, or PayPal"
    } else {
        document.getElementById("waysToPay").textContent = ""
    }
}
    


function addServicePull() {
    if(pullServiceAdded === false) {
        myServicesAdded.push(`<div><p class="serviceAdded">Pull Weeds</p> <p onclick="removePull()" class="removeService">Remove</p> <p class="servicePrice"><span>$</span>30</p></div>`)
        positionPull = myServicesAdded.length - 1
        document.getElementById("chosenServices").innerHTML += myServicesAdded[myServicesAdded.length-1]
        totalSum += 30
        document.getElementById("totalSumValue").innerHTML = totalSum
        pullServiceAdded = true
    }
    if(totalSum !== 0) {
        document.getElementById("waysToPay").textContent = "We accept cash, credit card, or PayPal"
    } else {
        document.getElementById("waysToPay").textContent = ""
    }
}
    

function removeWash() {
    if(positionWash || positionWash === 0) {
        myServicesAdded.splice(positionWash,1)
        document.getElementById("chosenServices").innerHTML = ""
        washServiceAdded = false
        
        if(positionMow > positionWash) {
            positionMow--
        }
        if(positionPull > positionWash) {
            positionPull--
        }
        positionWash = null
        totalSum -= 10
        document.getElementById("totalSumValue").innerHTML = totalSum
        for(let i = 0; i < myServicesAdded.length; i++) {
            document.getElementById("chosenServices").innerHTML += myServicesAdded[i]
        }
    }

    if(totalSum !== 0) {
        document.getElementById("waysToPay").textContent = "We accept cash, credit card, or PayPal"
    } else {
        document.getElementById("waysToPay").textContent = ""
    }
}


function removeMow() {
    if(positionMow || positionMow === 0) {
        myServicesAdded.splice(positionMow,1)
        document.getElementById("chosenServices").innerHTML = ""
        mowServiceAdded = false
        
        if(positionWash > positionMow) {
            positionWash--
        }
        if(positionPull > positionMow) {
            positionPull--
        }
        positionMow = null
        totalSum -= 20
        document.getElementById("totalSumValue").innerHTML = totalSum
        for(let i = 0; i < myServicesAdded.length; i++) {
            document.getElementById("chosenServices").innerHTML += myServicesAdded[i]
        }
    }
    if(totalSum !== 0) {
        document.getElementById("waysToPay").textContent = "We accept cash, credit card, or PayPal"
    } else {
        document.getElementById("waysToPay").textContent = ""
    }
}

function removePull() {
    if(positionPull || positionPull === 0) {
        myServicesAdded.splice(positionPull,1)
        document.getElementById("chosenServices").innerHTML = ""
        pullServiceAdded = false
        if(positionWash > positionPull) {
            positionWash--
        }
        if(positionMow > positionPull) {
            positionMow--
        }
        positionPull = null
        totalSum -= 30
        document.getElementById("totalSumValue").innerHTML = totalSum
        for(let i = 0; i < myServicesAdded.length; i++) {
            document.getElementById("chosenServices").innerHTML += myServicesAdded[i]
        }
    }
    if(totalSum !== 0) {
        document.getElementById("waysToPay").textContent = "We accept cash, credit card, or PayPal"
    } else {
        document.getElementById("waysToPay").textContent = ""
    }
}
    
    
function restart() {
    location.reload()
}    
    

