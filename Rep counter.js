let countEl = document.getElementById('count-el')
let incrementBtn = document.getElementById('increment-btn')
let saveBtn = document.getElementById('save-btn')
let resetBtn = document.getElementById('reset-btn')
let savedData = document.getElementById('saved-data')

let number = 0

incrementBtn.addEventListener("click", function(){
  number += 1
  countEl.innerText = number
})

saveBtn.addEventListener("click", function(){
  savedData.innerText += " " + number + " - "
  countEl.innerText = 0
  number = 0
})

resetBtn.addEventListener("click", function(){
  savedData.innerText = "Previous Reps: "
})
