// ------------ Lightning Exercise 1 -----------//
// In your HTML, create three header elements (and h1, an h2, and an h3) and give them each a unique id
// In your JavaScript file, select each element by its id.
// Log each element to the console to make sure you selected it correctly.

const h1Element = document.querySelector("#main-heading");
console.log(h1Element);

h1Element.addEventListener("click", function() {
  console.log("You clicked on the H1!");
  h1Element.classList.toggle("red-text");
});

const h2Element = document.querySelector("#sub-heading");
console.log(h2Element);

h2Element.addEventListener("click", function() {
  console.log("You clicked on the H2!");
});

const h3Element = document.querySelector("#section-heading");
console.log(h3Element);

h3Element.addEventListener("click", function() {
  console.log("You clicked on the H3!");
});

h1Element.innerHTML = "I'm so ready to learn to cooooode";
// h1Element.classList.add("blue-text")

// ----------------------- CLICK EVENTS ------------------------------------ //
// Create a button that says 'dark mode'
// Add a click event that just console.logs something

const darkModeButton = document.querySelector("#dark-mode");
console.log(darkModeButton);

darkModeButton.addEventListener("click", function() {
  console.log("You clicked on the dark mode button!");
  const bodyElement = document.querySelector("body");
  // const nameInput = document.querySelector("#first-name-input")
  bodyElement.classList.toggle("dark-mode");
});

// ------------------- Lightning Exercise 2 -----------//
// Add a click event listener to each heading element you just created.

// Inside the event listener's callback function, you should log a string about which element they clicked on to the console
// Create a CSS file and link it to your HTML file
// Inside the event listener for your h1 element, add a line of code that will change the text color of the h1 element to red when you click on it

// --------------  OTHER TYPES OF EVENTS // FUNCTIONS OUTSIDE EVENT LISTENERS -------------------//
// Add event listeners to each input to expand the form fields when you start typing

// const firstNameInput = document.querySelector("#first-name-input");
// const lastNameInput = document.querySelector("#last-name-input");
// const messageInput = document.querySelector("#message-input");

// function widenInput(eventObject) {
//   // console.log(eventObject.target)
//   const whateverImTypingIn = eventObject.target;
//   whateverImTypingIn.classList.add("wide-input");

//   // add class of wide-input
// }
// firstNameInput.addEventListener("keypress", widenInput);

// lastNameInput.addEventListener("keypress", widenInput);

// messageInput.addEventListener("keypress", widenInput);

// const submitButton = document.querySelector("#submit-btn");

// submitButton.addEventListener("click", function() {
//   // Get values of inputs
//   const firstNameValue = firstNameInput.value;
//   const lastNameValue = lastNameInput.value;
//   const messageValue = messageInput.value;


//   // Use string interpolation to build an HTML string
//   const htmlString = `<p>Name: ${firstNameValue} ${lastNameValue}</p>
//         <p>Message:</p>
//         <p>${messageValue}</p>
//     `;
//   console.log(htmlString);
//   // print string to message-output
//   const messageOutput = document.querySelector("#message-output");
//   messageOutput.innerHTML = htmlString;
// });

// You want to reuse your logic, so define it in a function outside the event listener
// let's also log the value of the text to the console

//---------------------- Lightning Exercise 4------------------------//
// Add a textarea element and a button with the text "Submit" to your HTML file
// Give the button an id
// Add a click event listener to the submit button
const submitBtn = document.querySelector("#lightning-exercise-submit-btn")

submitBtn.addEventListener("click", function(){
    // Get value of text area
    const textAreaValue = document.querySelector("#lightning-exercise-textarea").value
    // const textAreaValue = textArea.value

    // Log it to the console
    console.log(textAreaValue)
})
// When clicked, it should log the value of the textarea to the console










// ------------------------ SPA's ----------------------- //
// Add click events to your nav bar
// Each click event should print a string to the DOM
// event bubbling-- select the entire body tag
