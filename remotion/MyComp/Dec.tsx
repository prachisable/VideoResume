
import React from 'react';
import {
    linearTiming,
    TransitionSeries,
  } from "@remotion/transitions";
  import { wipe } from "@remotion/transitions/wipe";

export const Dec: React.FC = () => {
    return (
        <div className="w-full h-full p-24 relative overflow-hidden block z-10
        bg-[url('https://tse3.mm.bing.net/th?id=OIP.YluzD0XFdaQLz81zNa4lfwHaEK&pid=Api&P=0&h=220')]
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
            <h1 className="text-black text-6xl p-3">Self Declaration:</h1>
            <ul style={{ fontSize: '3em', listStyle: 'none' }}>
                <TransitionSeries >
                    <TransitionSeries.Transition
                        timing={linearTiming({ durationInFrames:100 })}
                        presentation={wipe()}
                    />
                    <TransitionSeries.Sequence durationInFrames={300} className=''>
                    <p className='p-20'>I hereby declare that above mentioned details are complete in all 
                    respects and correct to the best of my knowledge.</p>
                    
  
                    </TransitionSeries.Sequence>
                </TransitionSeries>
            </ul>
        </div>
    );
};





