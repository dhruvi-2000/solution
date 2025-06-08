// This function mimics React.createElement
// It creates a virtual DOM element as a plain JavaScript object

export function createElement(type, props, ...children) {
  return {
    type,  // The HTML tag or component type (e.g., 'div', 'p', 'ul')

    props: {
      ...props,  // Spread all passed-in props (e.g., className, id, etc.)

      children: children.flat() 
      // Handle nested children (e.g., arrays of children)
      // `.flat()` ensures all children are in a single-level array
    }
  };
}
