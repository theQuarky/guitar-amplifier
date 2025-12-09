# 🎸 Guitar Amplifier

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://theQuarky.github.io/guitar-amplifier/)

**[🚀 Try the Live Demo](https://theQuarky.github.io/guitar-amplifier/)**

A web-based guitar amplifier application built with React and the Web Audio API. This application allows you to plug your guitar into your computer's audio input and process the sound with real-time EQ controls and visual feedback.

## ✨ Features

- **Real-time Audio Processing**: Process your guitar input with zero-latency audio processing
- **3-Band Equalizer**: Control Bass, Mid, and Treble frequencies independently
- **Volume Control**: Adjustable output volume
- **Audio Visualizer**: Dynamic frequency-based visualization with colorful bars
- **Web Audio API**: Utilizes modern browser audio capabilities for professional sound processing
- **Responsive Design**: Works across different screen sizes

## 🎵 Audio Processing

The application uses the Web Audio API to create a professional signal chain:

1. **Input**: Captures audio from your microphone/line-in with optimized settings (no echo cancellation, auto-gain, or noise suppression)
2. **Bass EQ**: Low-shelf filter at 500Hz (-10 to +10 dB)
3. **Mid EQ**: Peaking filter at 1500Hz (-10 to +10 dB)
4. **Treble EQ**: High-shelf filter at 3000Hz (-10 to +10 dB)
5. **Volume**: Gain control (0 to 1)
6. **Analyzer**: Real-time frequency analysis for visualization
7. **Output**: Processed audio sent to your speakers/headphones

## 🛠️ Technologies Used

- **React** (v16.13.1) - UI framework
- **Web Audio API** - Audio processing and analysis
- **Canvas API** - Real-time audio visualization
- **jQuery** (3.5.1) - DOM manipulation for audio initialization
- **Create React App** - Development environment and build tooling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v12.0 or higher)
- **npm** or **yarn** package manager
- A **guitar** and **audio interface** (or any audio input device)
- A modern web browser with Web Audio API support (Chrome, Firefox, Edge, Safari)

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/theQuarky/guitar-amplifier.git
cd guitar-amplifier
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎮 Usage

1. **Connect Your Guitar**: 
   - Connect your guitar to your computer's audio interface or line-in
   - Ensure your audio input is properly configured in your system settings

2. **Grant Microphone Permission**: 
   - When you first load the app, your browser will ask for microphone permission
   - Click "Allow" to enable audio input

3. **Adjust Controls**:
   - **Volume**: Controls the output level (0.0 to 1.0)
   - **Bass**: Adjusts low frequencies (-10 to +10 dB)
   - **Mid**: Adjusts mid frequencies (-10 to +10 dB)
   - **Treble**: Adjusts high frequencies (-10 to +10 dB)

4. **Watch the Visualizer**: 
   - The frequency visualizer shows real-time audio spectrum
   - Colors change based on frequency intensity

## 📁 Project Structure

```
guitar-amplifier/
├── public/
│   ├── index.html          # Main HTML with audio processing script
│   ├── manifest.json       # PWA manifest
│   └── ...
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── Controller.js       # Reusable control slider component
│   ├── Visualizer.js       # Canvas-based audio visualizer
│   ├── audio.js            # Audio processing logic (reference)
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you need full control over the build configuration, you can `eject` at any time.

## 🌐 Browser Compatibility

This application requires a modern browser with support for:
- Web Audio API
- MediaDevices API (getUserMedia)
- Canvas API
- ES6+ JavaScript features

**Recommended browsers:**
- Chrome 74+
- Firefox 66+
- Safari 12+
- Edge 79+

## ⚠️ Important Notes

- **Feedback Warning**: Be careful of audio feedback! Use headphones instead of speakers to avoid feedback loops.
- **Latency**: For best results, use an audio interface with low-latency drivers (ASIO on Windows, Core Audio on macOS).
- **Browser Permissions**: The app requires microphone access to function. Make sure to grant permission when prompted.
- **HTTPS**: Some browsers require HTTPS for microphone access. The development server uses HTTP, but this works on localhost.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**theQuarky**

- GitHub: [@theQuarky](https://github.com/theQuarky)

---

**Made with ❤️ for guitarists and audio enthusiasts**
