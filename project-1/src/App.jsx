// In React, components are reusable, independent code blocks (A function or a class) that define the structure and behavior of the UI. They accept inputs (props or properties) and return elements that describe what should appear on the screen.

// Key Concepts of React Components:

// Each component handles its own logic and UI rendering.
// Components can be reused throughout the app for consistency.
// Components accept inputs via props and manage dynamic data using state.
// Only the changed component re-renders, not the entire page.

// Types of React Components

// There are two primary types of React components:

// 1. Functional Components
// Functional components are simpler and preferred for most use cases. They are JavaScript functions that return React elements. With the introduction of React Hooks, functional components can also manage state and lifecycle events.

// Stateless or Stateful: Can manage state using React Hooks.
// Simpler Syntax: Ideal for small and reusable components.
// Performance: Generally faster since they don’t require a 'this' keyword.

// 2. Class Components
// Class components are ES6 classes that extend React.Component. They include additional features like state management and lifecycle methods.

// State Management: State is managed using the this.state property.
// Lifecycle Methods: Includes methods like componentDidMount,componentDidUpdate, etc.

// State in React Components
// The state is a JavaScript object managed within a component, allowing it to maintain and update its own data over time. Unlike props, state is mutable and controlled entirely by the component.

// State updates trigger re-renders.
// Functional components use the useState hook to manage state.