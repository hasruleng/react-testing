import React from "react";
import { Thought } from "./Thought.js";
import { render, screen } from '@testing-library/react'


// Import render and screen here

it("Displays the Thought component", () => {
  // Pass to Thought component as thought prop
  const thought = { text: "learn react testing library" };
  // Add your testing logic here
  render(<Thought 
    thought = { thought }
    removeThought = { () => {} }
  />);
  screen.debug()
});
