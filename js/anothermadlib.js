var captureNoun = document.querySelector ('#entered-noun');
var captureVerb = document.querySelector ('#entered-verb');
var captureAdjective = document.querySelector ('#entered-adjective');
var submitButton = document.querySelector ('#button')
var capturedOutput = document.querySelector('#the-output');

if (captureNoun && captureVerb && captureAdjective &&  submitButton && capturedOutput) {

console.log("foo");

submitButton.addEventListener ("click", function(whatevs){

  event.preventDefault();

var nounValue = captureNoun.value;
var verbValue = captureVerb.value;
var adjectiveValue = captureAdjective.value;

var outputValue = "Ok cool, your Madlib goes like this: ";
var warningMessage = "Please fill in all fields";

  if (nounValue !== "" && verbValue != "" && adjectiveValue != "") {

    console.log("foo");

    outputValue += "Mary had a little ";
    outputValue += nounValue;
    outputValue += " little ";
    outputValue += nounValue;
    outputValue += " little ";
    outputValue += nounValue;
    outputValue += ".";
    outputValue += " That ";
    outputValue += nounValue;
    outputValue += " loved to ";
    outputValue += verbValue;
    outputValue += " all across the moon. ";
    outputValue += " everyday was a beautiful day because ";
    outputValue += adjectiveValue;
    outputValue += " was fun ";

    capturedOutput.textContent = outputValue;

    nounValue.value = "";
    verbValue.value = "";
    adjectiveValue.value = "";

    }else {

    capturedOutput.innerHTML = warningMessage;

    }
  });
}
