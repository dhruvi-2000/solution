// Import the custom createElement function from local file
import { createElement } from './createElement.js';

// Define the App component using an arrow function
// This mimics a React component but returns a custom virtual DOM tree
export const App = () =>
  createElement('div', {},                    // Create a <div> element with no props
    createElement('h1', {},                   // Inside it, create a <h1> element
      ' Hello from Console Renderer!'       // With text content
    ),
    createElement('p', {},                    // Create a <p> element
      'This is a custom React renderer.'      // With text content
    ),
    createElement('ul', {},                   // Create a <ul> element for list
      createElement('li', {}, 'Support for nested components'),  // List item 1
      createElement('li', {}, 'Outputs to console'),             // List item 2
      createElement('li', {}, 'Bonus: Structured format')        // List item 3
    )
  );
