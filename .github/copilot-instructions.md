# Text Difference Checker - React App

This is a React application built with Vite that allows users to compare two text files and visualize the differences between them.

## Features

- Upload text files or paste text directly
- Side-by-side comparison interface
- Visual highlighting of differences (additions, deletions, unchanged)
- Clean and modern UI
- Responsive design for mobile devices

## Technology Stack

- React 18 with Vite
- diff library for text comparison
- CSS Grid and Flexbox for layout
- Modern JavaScript (ES6+)

## Usage

1. Upload text files using the file inputs or paste text directly into the text areas
2. Click "Compare Texts" to see the differences
3. Use "Clear All" to reset both inputs and results

The differences are displayed with:
- Green background for added lines (marked with +)
- Red background for removed lines (marked with -)
- White background for unchanged lines (marked with space)

## Development

Run `npm run dev` to start the development server.
Run `npm run build` to build for production.
