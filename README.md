# Text Difference Checker

A React application that allows users to compare two text files and visualize the differences between them.

## Features

- **File Upload**: Upload text files directly from your computer
- **Text Input**: Paste text directly into text areas
- **Visual Diff**: See differences highlighted with color coding:
  - 🟢 Green: Added lines
  - 🔴 Red: Removed lines  
  - ⚪ White: Unchanged lines
- **Responsive Design**: Works on desktop and mobile devices
- **Clear Interface**: Clean, modern UI for easy use

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd DifferenceChecker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Input Method 1 - File Upload**: 
   - Click "Choose File" buttons to upload text files
   - Supported format: .txt files

2. **Input Method 2 - Direct Text**:
   - Paste or type text directly into the text areas

3. **Compare**: 
   - Click "Compare Texts" to see the differences

4. **Clear**: 
   - Click "Clear All" to reset everything

## Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with Grid and Flexbox
- **Diff Library**: diff (for text comparison algorithms)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is open source and available under the [MIT License](LICENSE).+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
