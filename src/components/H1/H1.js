import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import { gsap } from 'gsap';
import axios from 'axios';

const HeroSection = () => {
    useEffect(() => {
        gsap.from('.hero-text', { opacity: 0, y: -50, duration: 1, ease: 'power4.out' });
        gsap.from('.hero-image', { opacity: 0, x: 50, duration: 1, delay: 0.5, ease: 'power4.out' });
    }, []);

    const fetchImages = async () => {
        const response = await axios.get('https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY');
        return response.data.urls.regular;
    };

    return (
        <div className="hero-section">
            <div className="hero-text">
                <h1>Welcome to My Resume</h1>
                <p>Crafting a better future, one line of code at a time.</p>
            </div>
            <div className="hero-image">
                <img src="https://via.placeholder.com/400" alt="Profile" />
            </div>
            <Canvas className="hero-3d">
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars />
                <mesh>
                    <boxBufferGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={'orange'} />
                </mesh>
            </Canvas>
        </div>
    );
};

export default HeroSection;
