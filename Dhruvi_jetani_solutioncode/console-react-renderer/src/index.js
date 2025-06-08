// Import the App component (a tree of virtual elements)
import { App } from './App.js';

// Import the custom render function that prints to the console
import { render } from './render.js';

// Call the App function to get the virtual DOM structure,
// then pass it to the render function to print it in console
render(App());
