/*1. Store input element
  2. Watch for clicking on the button
  3. Store the output in a container element to display
*/

//Set the variables that are needed for our functionality

var userInputBox = document.querySelector('#user-name-input');

//Listen for a click event on the button to then perform the functionality
var submitUserInput = document.querySelector('#submit-user-name');
var outputContainer = document.querySelector('#user-name-output');

if (userInputBox && submitUserInput && outputContainer) {
//check to make sure all of these elements exist before targeting them. More optional but good to have.


submitUserInput.addEventListener('click', function(){ //Capture the value fo the input element and store as a variable
var userName = userInputBox.value;
//Dynamically build a string message based on user input
var outputMessage = 'Welcome ';
outputMessage += userName; //This concatinates to the above welcome message
outputMessage += '!';
//put the output message in the paragraph element to display it on the page
outputContainer.textContent = outputMessage; //This will set the text that is currenlty displayed for that element. Essentially, taking this output element string and put it into the paragraph.


//Longer way of doig it is... var outputMessage = 'Welcom ' + 'userName + '!';

});//requires two argument. type of event we're listenign to and second, the call back function - what gets performed
}
