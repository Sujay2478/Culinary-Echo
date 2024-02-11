import { addIngredientToRecipe, clearRecipe, finishRecipe } from "./script.js";

// Check for browser support for SpeechRecognition
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
  let recognition = new window.SpeechRecognition();
  recognition.continuous = true; // Recognition continues even after speech has stopped
  recognition.interimResults = true; // Results are returned while recognition is ongoing

  recognition.start(); // Start recognition

  recognition.onresult = function (event) {
    const last = event.results.length - 1; // Get the index of the latest result
    const text = event.results[last][0].transcript.trim(); // Get the transcript of the latest result

    console.log("Voice Input: ", text);

    // Call the appropriate function based on the voice command
    if (text.toLowerCase().includes("add flour")) {
      addIngredientToRecipe("Flour");
    } else if (text.toLowerCase().includes("add sugar")) {
      addIngredientToRecipe("Sugar");
    } else if (text.toLowerCase().includes("add eggs")) {
      addIngredientToRecipe("Eggs");
    } else if (text.toLowerCase().includes("add chocolate chips")) {
      addIngredientToRecipe("Chocolate Chips");
    } else if (text.toLowerCase().includes("add baking soda")) {
      addIngredientToRecipe("Baking Soda");
    } else if (text.toLowerCase().includes("add vanilla extract")) {
      addIngredientToRecipe("vanilla extract");
    } else if (text.toLowerCase().includes("add cocoa powder")) {
      addIngredientToRecipe("Cocoa Powder");
    } else if (text.toLowerCase().includes("add honey")) {
      addIngredientToRecipe("Honey");
    }
    // ... add more ingredients as needed
    else if (text.toLowerCase().includes("finish recipe")) {
      finishRecipe();
    } else if (text.toLowerCase().includes("clear recipe")) {
      clearRecipe();
    }
  };

  recognition.onerror = function (event) {
    console.error("Speech recognition error", event.error);
  };
} else {
  console.log("Your browser doesn't support speech recognition.");
}
