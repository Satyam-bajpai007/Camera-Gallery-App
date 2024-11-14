# CaptureX - Run Guide 🚀

A step-by-step guide to get the CaptureX camera application running on your local machine.

## Prerequisites 📋

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Code editor (VS Code recommended)

## Quick Start Guide ⚡

### 1. Clone and Install

```bash
# 1. Unzip the project folder
# If you received a ZIP file, extract it to your desired location

# 2. Open terminal/command prompt and navigate to project folder
cd path/to/capturex

# 3. Install dependencies
npm install
```

### 2. Run the Application

```bash
# Start development server
npm run dev
```

After running this command, you should see something like:

```
  VITE v4.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://xxx.xxx.x.x:5173/
```

### 3. Access the Application

1. Open your web browser
2. Go to `http://localhost:5173` (or the URL shown in your terminal)
3. Allow camera permissions when prompted

## Common Issues & Solutions 🔧

### Camera Not Working?

1. Ensure you've allowed camera permissions in your browser
2. Check if another application is using your camera
3. Try refreshing the page
4. Make sure you're using HTTPS or localhost

### Dependencies Installation Failed?

```bash
# Try removing node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

### Port Already in Use?

The default port (5173) might be in use. You can:

1. Close other development servers
2. Or use a different port:

```bash
npm run dev -- --port 3000
```

## Application Features 📱

Once running, you can:

- Switch between front and back cameras
- Change aspect ratio (16:9, 4:3, 1:1)
- Use zoom controls
- Capture photos
- View photos in gallery
- Delete photos from gallery

## Folder Structure 📁

```
capturex/
├── src/
│   ├── components/
│   │   ├── gallery/
│   │   ├── layout/
│   │   └── ui/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── index.html
```

## Need Help? 🤝

If you encounter any issues:

1. Check the common issues section above
2. Ensure all prerequisites are met
3. Contact me at:
   - Email: satyambajpai0210@gmail.com
   - GitHub: https://github.com/Satyam-bajpai007
   - LinkedIn: https://www.linkedin.com/in/satyam-bajpai-885a731a9/

## Browser Support 🌐

Tested and working on:

- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: For best experience, use the latest version of Chrome or Firefox.

---

Happy Capturing! 📸
