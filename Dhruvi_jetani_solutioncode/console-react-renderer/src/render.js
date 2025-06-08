// Importing 'chalk' for colored and styled console text
import chalk from 'chalk';

/**
 * Recursively renders a virtual element structure to the console.
 * @param {Object|string|number} element - The element to render. Can be a string, number, or a custom object.
 * @param {number} indent - The current indentation level (used for nested structures).
 */
function renderElement(element, indent = 0) {
  // Create spacing based on nesting level for pretty formatting
  const spacing = '  '.repeat(indent);

  // If the element is a plain text or number, log it in yellow
  if (typeof element === 'string' || typeof element === 'number') {
    console.log(spacing + chalk.yellow(element));
    return;
  }

  // Destructure element into type (tag name) and props (attributes/children)
  const { type, props } = element;

  // Print the opening tag with green bold styling
  console.log(spacing + chalk.green.bold(`<${type}>`));

  // Normalize children: handle single child or null as an array
  const children = Array.isArray(props.children) ? props.children : [props.children];

  // Recursively render each child with increased indentation
  children.forEach(child => {
    if (child !== null && child !== undefined) {
      renderElement(child, indent + 1);
    }
  });

  // Print the closing tag with same style as opening
  console.log(spacing + chalk.green.bold(`</${type}>`));
}

/**
 * Entry point for rendering a virtual component tree to the console.
 * Clears the console and logs the rendered structure.
 * @param {Object} rootElement - The root virtual element (usually returned from App()).
 */
export function render(rootElement) {
  // Clear console for clean output
  console.clear();

  // Indicate rendering started with blue styling
  console.log(chalk.blue.bold('🌟 Console Render Start:\n'));

  // Render the virtual DOM
  renderElement(rootElement);

  // Indicate rendering completed
  console.log(chalk.blue.bold('\n🌟 Console Render End.'));
}
