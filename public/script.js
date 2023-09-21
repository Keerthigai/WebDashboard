// script.js
const popup = document.getElementById('popup');
const messageElement = document.getElementById('message');
const image = document.getElementById('image');
let showMessage = false; 

// Function to display the message on the web dashboard
function showMessageOnDashboard(message) {
    messageElement.innerText = message;
    popup.style.display = 'flex';
}

// Function to voice the message using the Web Speech API
function voiceMessage(message) {
    const speechSynthesis = window.speechSynthesis;
    const speechMessage = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(speechMessage);
}

// Function to hide the popup and show the image
function hideMessage() {
    popup.style.display = 'none';
    // Show the image by restoring opacity
    image.style.opacity = 1;
    // Reset the state variable to allow subsequent requests
    showMessage = false;
}

// Initially, show the image
image.style.opacity = 1;


// Simulate an HTTP request 
function simulateHTTPRequest() {
    if (!showMessage) { // Check if a message is already displayed
        // Hide the image
        image.style.opacity = 0;

        // Display the message 
        showMessageOnDashboard('Object Detected');

        // Voice 
        voiceMessage('Object Detected');

        // Set the state variable to prevent subsequent requests from showing the message immediately
        showMessage = true;

        // Hide the message after a delay
        setTimeout(hideMessage, 5000); // 5 seconds

        // Reload the page after a delay 
        /*setTimeout(function () {
            location.reload();
        }, 5000); // Refresh after 5 seconds*/
    }
}

setTimeout(simulateHTTPRequest, 10000); // Simulate an HTTP request after 10 seconds


