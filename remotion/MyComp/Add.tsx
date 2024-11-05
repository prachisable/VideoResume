// src/scenes/Skills.tsx
import React from 'react';
import {
    linearTiming,
    TransitionSeries,
  } from "@remotion/transitions";
  import { wipe } from "@remotion/transitions/wipe";

export const Add: React.FC = () => {
    return (
        <div className="w-full h-full p-24 relative overflow-hidden block z-10
        bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20220312/pngtree-personal-development-career-image_1061886.jpg')]
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
            <h1 className="text-black text-6xl p-3">Personal Profile:</h1>
            <ul style={{ fontSize: '3em', listStyle: 'none' }}>
                <TransitionSeries >
                    <TransitionSeries.Transition
                        timing={linearTiming({ durationInFrames:100 })}
                        presentation={wipe()}
                    />
                    <TransitionSeries.Sequence durationInFrames={300} className=''>
                    <li>  Name : Prachi Sayaji Sable.  </li>
                    <li>  Date of Birth : 04-April-2000.  </li>
                    <li>Marital status : Unmarried.  </li>
                    <li> Nationality : Indian. </li>
                    <li> Languages Known : English, Marathi, Hindi. </li>
                    <li> Address : Best Courter Room no 9, SV road, Santacruz (W), 400054. </li>
                    <li> Permanent Address: At Sabalewadi, post. Umbraj, Tal. Karad, Dist. 
                    Satara (415109).  </li>
  
                    </TransitionSeries.Sequence>
                </TransitionSeries>
            </ul>
        </div>
    );
};





