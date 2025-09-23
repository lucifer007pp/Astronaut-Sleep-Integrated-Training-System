##Astronaut Sleep-Integrated Training System 🌌🚀
#Overview

The Astronaut Sleep-Integrated Training System (ASITS) is a cutting-edge web-based simulation platform designed to train astronauts during sleep. The system leverages lucid dreaming techniques and subconscious conditioning to rehearse mission scenarios such as emergencies, repairs, landings, and relaxation exercises — all in a safe, immersive virtual environment.

This repository features a modern interactive 3D website built with Vite, React, Three.js, and GSAP, providing astronauts and users with an intuitive, space-inspired interface.

Features
3D Interactive Landing Page

Floating astronaut model with zero-gravity mouse-controlled drift.

Rotating and twinkling starfield background for an immersive space environment.

Smooth, natural animations powered by GSAP.

Overlay UI for introduction and navigation.

Explore System Page

Detailed explanation of how the system works:

Before Sleep: Scenario selection via neural headset.

Sleep Monitoring: Detection of REM sleep using EEG.

Dream Nudging: Audio, light, or haptic cues guide dreams.

Inside the Dream: Lucid-trained astronauts actively rehearse tasks.

Wake-Up Review: EEG and self-reports analyzed for insights.

Modern Web Design

Responsive layout with clean typography.

Subtle blur overlays and stylish buttons for a professional look.

Optimized for performance and stability.

Tech Stack
Category	Technology
Framework	React (Vite Template)
3D Rendering	Three.js, React Three Fiber (@react-three/fiber)
3D Utilities	Drei (@react-three/drei)
Animations	GSAP
Routing	React Router DOM
Styling	CSS / Tailwind optional
Assets	GLTF/GLB 3D model for astronaut
Installation

Clone the repository

git clone https://github.com/yourusername/astro-sleep.git
cd astro-sleep


Install dependencies

npm install


Run the development server

npm run dev


Open in browser
Navigate to the URL provided by Vite (e.g., http://localhost:5173).

Project Structure
astro-sleep/
 ├─ public/
 │   └─ models/
 │       └─ astronaut.glb   <-- 3D model
 ├─ src/
 │   ├─ components/
 │   │   └─ ThreeScene.jsx  <-- 3D scene & astronaut
 │   ├─ pages/
 │   │   ├─ Home.jsx        <-- Landing page
 │   │   └─ How.jsx         <-- How it works page
 │   ├─ App.jsx
 │   ├─ main.jsx
 │   └─ styles.css
 └─ index.html

Usage

Open the landing page (/) to view the interactive 3D astronaut in space.

Move your mouse to see the astronaut drift naturally, simulating zero gravity.

Click “Explore the System” to navigate to the system explanation page.

Learn about the stages of lucid-dream-based astronaut training.

Optimization & Performance

Suspense fallback used for 3D model loading.

Stars rendered as a single Points object to minimize draw calls.

GSAP animations are lightweight and reusable.

Proper cleanup on component unmount to prevent memory leaks.

Future Enhancements

Add ambient space sounds for full immersion.

Include VR/AR support for more realistic astronaut training simulations.

Add interactive dream scenario previews in 3D.

Integrate real EEG data simulation for educational purposes.

Contributing

Fork the repository.

Create a new branch: git checkout -b feature/YourFeature

Make your changes and commit: git commit -m "Add YourFeature"

Push to the branch: git push origin feature/YourFeature

Open a pull request.
