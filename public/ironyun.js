// ironyun.js

const { get } = require("http");

// Function to make a request to IronYun for object detection
async function detectObjects(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      // IronYun's API documentation
      const response = await fetch('/ainvr/api/alerts/latest', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        // Parse data and extract detected object information
        handleObjectDetection(data);
      } else {
        console.error('Failed to detect objects:', response.statusText);
      }
    } catch (error) {
      console.error('Error during object detection:', error);
    }
  }
  
  // Function to handle object detection results and display messages
  function handleObjectDetection(data) {
    // Extract information from data
    const detectedObjects = data.map((result) => result.objectType);
  
    // Customize message based on detected objects
    const message = `Detected Objects: ${detectedObjects.join(', ')}`;
    
    // Display the message on the web dashboard
    showMessageWithVoice(message);
  }
  