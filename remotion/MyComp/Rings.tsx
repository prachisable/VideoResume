// src/scenes/Skills.tsx
import React from 'react';

export const Rings: React.FC = () => {
    return (
        <div style={{ flex: 1, backgroundColor: '#e0e0e0', color: '#333', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Skills</h2>
            <ul style={{ fontSize: '1.2em', listStyle: 'none' }}>
                <li>✔️ JavaScript & React</li>
                <li>✔️ CSS & HTML</li>
                <li>✔️ Node.js & Express</li>
                <li>✔️ Web Design</li>
            </ul>
        </div>
    );
};


