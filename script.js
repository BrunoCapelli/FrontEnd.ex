let  valueOne = document.getElementById("1")
let  valueTwo = document.getElementById("2")
let  valueThr = document.getElementById("3")
let  valueFour = document.getElementById("4")
let  valueFive = document.getElementById("5")
let submitButton = document.querySelector("#submit")
let finalValue = document.querySelector("selectedValue")
let containerOne = document.querySelector(".container")
let containerTwo = document.querySelector(".container2")
let ratingSelected = document.querySelector(".selectedRating")
let clicker = ""

function activateButton(valueButton){

    if (valueButton.classList.contains("value")){
        valueButton.classList.remove("value")
        valueButton.classList.add("selectedButton")
     } 
}

function deactivateButton(valueButton){
    
    if (valueButton.classList.contains("selectedButton")){
        valueButton.classList.remove("selectedButton")
        valueButton.classList.add("value")
     }
}

function switchButton(valueIn, id){
    valueIn.addEventListener("click", function() { 
        if (clicker === ""){
            clicker = id
            activateButton(valueIn)}
        else if (clicker === id){
            clicker = ""
            deactivateButton(valueIn)
        }
      }
    )
}
switchButton(valueOne, 1)
switchButton(valueTwo, 2)
switchButton(valueThr, 3)
switchButton(valueFour, 4)
switchButton(valueFive, 5)

submitButton.addEventListener("click", function(button){
    button.preventDefault()
})

function send(){
    
    if (clicker != ""){
        console.log(clicker)
        containerOne.classList.add("hidden")
        containerTwo.classList.remove("hidden")
        ratingSelected.insertAdjacentHTML("afterbegin", `<p>You selected ${clicker} out of 5</p>` )

    } else{
        alert("You must select one option!")
    }
}
