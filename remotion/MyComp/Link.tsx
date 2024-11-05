// src/scenes/Skills.tsx
import React from 'react';
import {
    linearTiming,
    TransitionSeries,
  } from "@remotion/transitions";
  import { wipe } from "@remotion/transitions/wipe";

export const Link: React.FC = () => {
    return (
        <div className="w-full h-full p-24 relative overflow-hidden block z-10
        bg-[url('https://static.vecteezy.com/system/resources/previews/002/885/317/original/pink-red-beautiful-spring-flower-bloom-branch-background-with-free-copy-space-for-greeting-card-or-environment-cover-page-template-web-banner-and-header-free-photo.jpg')]
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
            <h1 className="text-black text-6xl p-3">Additional Links:</h1>
            <ul style={{ fontSize: '3em', listStyle: 'none' }}>
                <TransitionSeries >
                    <TransitionSeries.Transition
                        timing={linearTiming({ durationInFrames:100 })}
                        presentation={wipe()}
                    />
                    <TransitionSeries.Sequence durationInFrames={300} className=''>
                    <li>  Git Link: - https://github.com/prachisable/shopy.git </li>
                    <li>  LinkedIn: - https://www.linkedin.com/in/prachi-sable-149848241 </li>
  
                    </TransitionSeries.Sequence>
                </TransitionSeries>
            </ul>
        </div>
    );
};





