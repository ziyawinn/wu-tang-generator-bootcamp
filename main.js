
// worked with house Gardner
// when this button is clicked it will look for the array and make a new name
document.querySelector("button").addEventListener("click",convert)
let firstNameArray=['killah','dirty','smoke','lil']
let secondNameArray=['foolish','master','ignite','big']
// the questions will  get selected and pick the value with in
function grabValues(){
    let q1 = Number(document.querySelector(".pets").value)
    let q2 = Number(document.querySelector(".drinks").value)
    let q3 = Number(document.querySelector(".icecream").value)
    let sum1=(q1+q2)%3
    let q4 = Number(document.querySelector(".cheese").value)
    let q5 = Number(document.querySelector(".season").value) 
    let sum2=(q3+q4)%2

    return [sum1,sum2]
}

function convert(){ 
    let name= document.querySelector("input").value
    let mainValue= grabValues()
    let firstName=firstNameArray[mainValue[0]]
    let secondName=secondNameArray[mainValue[1]]
    document.querySelector("h2").innerText = `${name} Will now be known as ${firstName} ${secondName}`

console.log (firstName,secondName)



}

// function ("") {
//     answer.innerText = answer

