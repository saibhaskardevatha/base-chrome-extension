# Base Chrome Extension

## Features

- React
- Vite
- TailwindCSS
- ESLint
- Prettier

## Commands

- `npm run dev` - Run the development server
- `npm run build` - Build the extension
- `npm run preview` - Preview the extension
- `npm run lint` - Lint the code
- `npm run format` - Format the code

## Structure

- `src/background/manifest.json` - Manifest file
- `src/background/background.js` - Background script
- `src/content/content.js` - Content script
- `src/background/options.html` - Options page
- `src/background/popup.html` - Popup HTML
- `src/background/sidebar.html` - Sidebar HTML

## Build

- `npm run build` - Build the extension
- `dist` - The build directory

## Usage

- `npm degit saibhaskardevatha/base-chrome-extension <your-extension-name>` - Clone the repository
- `npm install` - Install the dependencies
- `npm run build` - Build the extension
- `chrome://extensions/` - Load the extension
