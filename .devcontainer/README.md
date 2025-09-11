# GitHub Codespaces Configuration

This directory contains the configuration for GitHub Codespaces, which provides a cloud-based development environment for this web development repository.

## What's Included

### Development Environment
- **Base Image**: Node.js 20 on Debian Bullseye
- **Package Manager**: npm (with Node.js)
- **Additional Tools**: Git, GitHub CLI

### VS Code Extensions
- **Web Development**: HTML/CSS support, auto-rename tags, CSS peek
- **TailWind CSS**: IntelliSense and class completion  
- **JavaScript/React**: TypeScript support and React development tools
- **Code Quality**: Prettier formatter
- **Development Server**: Live Server for static files
- **Utilities**: Path IntelliSense, JSON support

### Port Forwarding
- **3000**: React Development Server
- **5173**: Vite Development Server (for TailWind CSS project)
- **5505**: Live Server (matches existing VS Code settings)
- **8080**: General development server

## How to Use

1. **Open in Codespaces**: Click the "Code" button on GitHub and select "Create codespace on main"
2. **Wait for Setup**: The environment will automatically install dependencies and configure the workspace
3. **Start Development**: 
   - For React projects: `cd React/react-project-one && npm start`
   - For TailWind CSS: `cd TailWind_CSS && npm run dev`
   - For static HTML/CSS/JS: Use Live Server extension or run `live-server` in the project directory

## Customization

You can modify the `devcontainer.json` file to:
- Add more VS Code extensions
- Change port forwarding settings
- Install additional development tools
- Modify the base image or features