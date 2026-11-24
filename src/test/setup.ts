import "@testing-library/jest-dom";
import React from "react";

// Ensure React is globally accessible in tests if needed
(globalThis as unknown as { React: typeof React }).React = React;
