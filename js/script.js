/*1. Store input element
  2. Watch for clicking on the button
  3. Store the output in a container element to display
*/

//userInputBox, submitUserInput,and outputContainer are variables that are created that will be used for functionality and to also shorten the document.querySelector method so i don't have to type it completely.

var userInputBox = document.querySelector('#user-name-input');

//Listen for a click event on the button to then perform the functionality
var submitUserInput = document.querySelector('#submit-user-name');
var outputContainer = document.querySelector('#user-name-output');

if (userInputBox && submitUserInput && outputContainer) {
//This if statement is to check to make sure all of these elements exist before targeting them. More optional but good to have.


submitUserInput.addEventListener('click', function(event){ //requires two argument. type of event we're listenign to and second, the call back function - what gets performed

//event.preventDefault(); not needed. only for when using a form
var userName = userInputBox.value; // When you use querySelector you get the element itself. ".value" is going to go beyond that and get the value property of that element.


var outputMessage = 'Welcome '; //Dynamically build a string message based on user input
outputMessage += userName; //This concatinates to the above welcome message
outputMessage += '!';

outputContainer.textContent = outputMessage; //This will set the text that is currenlty displayed for that element. Essentially, taking this output element string and put it into the paragraph.


//Longer way of doig it is... var outputMessage = 'Welcome' + 'userName + '!'; += concatination is quicker

});
}
