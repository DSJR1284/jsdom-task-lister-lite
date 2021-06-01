
// DOMContentLoaded or defer 
// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
  
// });


// arrow function
// Regular function Syntax
// function charliebrown(){
  // }
  // Arrow function Syntax
  // const charlieBrown = () => {
    // }
    // Key Difference if the => after the ()
    // Both can be invoked the same way. 
    // charileBrown()
    
    // wild west Question to ask when approcahing JS 
    // 1. What information do I need?
    // 2. What am I trying to do? 
    // 3. How do I want to approach writing it?     
    
const main = documenquerySelector("#main-content")
console.log(main)

const taskForm = documenquerySelect("#create-task-form")

const taskList = document.querySelector("#tasks")


taskForm.addEventListener("submit", function(e) {
e.preventDefault()
// have the user input
  const newTask = document.querySelector("#new-task-description").value
  // Slap it on the DOM
  // where do we want to put the user input?
  taskList.innerHTML += `<li> ${newTask} 
  <button data-action ="delete"> X </button>
  </li>`
  // const taskItem = document.createElement("li")
  // taskItem.innerText = newTask  
  // taskList.appendChild(taskItem)
  taskForm.reset()
})

taskList.addEventListener("click", function(e) {
  console.log(e.target)
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }  
})

// database

