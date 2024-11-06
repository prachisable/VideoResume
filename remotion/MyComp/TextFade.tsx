// src/scenes/End.tsx
import React from 'react';
import {
    linearTiming,
    TransitionSeries,
  } from "@remotion/transitions";
  import { wipe } from "@remotion/transitions/wipe";

export const TextFade: React.FC = () => {
    return (
        <div className="w-full h-full p-24 relative overflow-hidden block z-10
        bg-[url('http://www.freeppt.net/background/professional_ppt_background_image.jpg')]
        bg-cover bg-no-repeat bg-center
        before:content-['']
        before:absolute
        before:inset-0
        before:block
        before:bg-gradient-to-r
        before:from-green-400
        before:to-blue-500
        before:opacity-75
        before:z-[-5]">
            <h1 className="text-black text-6xl p-3">Experience Summary: </h1>
            <ul style={{ fontSize: '3em', listStyle: 'none' }}>
                <TransitionSeries >
                    <TransitionSeries.Transition
                        timing={linearTiming({ durationInFrames:100 })}
                        presentation={wipe()}
                    />
                    <TransitionSeries.Sequence durationInFrames={300} className=''>
                    <li> Completed 1 month of internship in web development using HTML and 
                    CSS</li>
                    <li> Completed 5 month of internship in web development with Html, Css, 
                    JavaScript. </li>
                    </TransitionSeries.Sequence>
                </TransitionSeries>
            </ul>
        </div>
    );
};

