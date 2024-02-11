# Culinary Echo

## Overview
The Culinary Echo is an interactive web application designed for creating recipes using voice commands. It combines the power of VR technology and speech recognition to provide a unique cooking experience. Users can select ingredients through a VR interface and add them to their recipe using voice commands.

##Note
This project was more of a research oriented project, so there was less emphasises on the coding aspect and more on the quality research process. 

## Features
- **VR Interface**: A virtual reality interface for an immersive ingredient selection experience.
- **Voice Command Functionality**: Enables adding ingredients to the recipe list through voice commands.
- **Dynamic Recipe Management**: Real-time updating of the recipe list displayed within the VR interface.

## How to Use
1. **Start the Application**: Open `index.html` in a web browser with VR and speech recognition support.
2. **Select Ingredients**: Use VR controllers or a mouse to interact with the VR interface.
3. **Use Voice Commands**: Speak commands like "add flour" or "clear recipe" to manage your recipe.
4. **View Your Recipe**: The VR interface shows the current list of ingredients and their quantities.

## Voice Commands
- **Add Ingredient**: Say "add [ingredient name]" (e.g., "add sugar").
- **Finish the Recipe**: Say "finish recipe" to complete your recipe creation.
- **Clear Recipe**: Say "clear recipe" to start over.

## File Structure
- `index.html`: The main HTML file with VR setup and interface elements.
- `script.js`: JavaScript file handling recipe list operations and UI updates.
- `voiceCommands.js`: JavaScript file for speech recognition and processing voice commands.

## Dependencies
- [A-Frame 1.5.0](https://aframe.io/): For building the VR interface.
- [A-Frame Event Set Component 3.0.3](https://www.npmjs.com/package/aframe-event-set-component): For enhanced event handling in A-Frame.

## Browser Compatibility
This application requires a browser that supports both WebVR and SpeechRecognition for full functionality.

## Contributing
Contributions are welcome. Please fork the repository and submit a pull request with your changes.

## Support
For support, please open an issue in the GitHub repository.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
