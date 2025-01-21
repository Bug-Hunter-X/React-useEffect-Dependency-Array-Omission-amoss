# React useEffect Dependency Array Issue

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include dependencies in the dependency array.  This can lead to unexpected re-renders and potential performance issues.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides the corrected version.

## Problem

The original code does not include `count` in the dependency array of the `useEffect` hook. This means the effect runs after every render, not just when the value of count changes.  This results in excessive logging and can even lead to infinite loops in more complex cases.

## Solution

The corrected code includes `count` in the dependency array.  The effect now only runs when the value of `count` changes, ensuring optimal performance.