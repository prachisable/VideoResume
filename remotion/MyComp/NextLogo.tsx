import React from 'react';
import {
  linearTiming,
  TransitionSeries,
} from "@remotion/transitions";
import { wipe } from "@remotion/transitions/wipe";

export const NextLogo: React.FC = () => {
    return (
      <div className="w-full h-full p-24 relative overflow-hidden block z-10
      bg-[url('https://wallpapercave.com/wp/wp3191455.jpg')]
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
          <h1 className="text-black text-6xl p-3">Educational Qualifications:</h1>
          <ul style={{ fontSize: '3em', listStyle: 'none' }}>
              <TransitionSeries >
                  <TransitionSeries.Transition
                      timing={linearTiming({ durationInFrames:100 })}
                      presentation={wipe()}
                  />
                  <TransitionSeries.Sequence durationInFrames={300} className=''>
                  <li> B Tech in Computer Science Engineering (2019 to 2022) with First Class 
                        With Distinction. </li>
                  <li> Diploma in Computer Engineering (2017 to 2019) with First Class With 
                         Distinction.</li>
                  </TransitionSeries.Sequence>
              </TransitionSeries>
          </ul>
      </div>
    );
};
