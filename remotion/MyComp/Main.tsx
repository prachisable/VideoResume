import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
//import { linearTiming, TransitionSeries } from "@remotion/transitions";
import {
  linearTiming,
  springTiming,
  TransitionSeries,
} from "@remotion/transitions";
//import { AbsoluteFill } from 'remotion';

import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";

interface mainProps extends Record<string, unknown> {
  name: string;
}

export const Main: React.FC<mainProps> = ({ name }) => {
  const frame = useCurrentFrame();
  return (
    //<div className="text-red-500 text-9xl bg-white w-full h-full flex items-center justify-center min-h-screen">
      
      <h1
        style={{
          opacity:  interpolate(frame, [0, 30], [0, 1]),
        }}
      >
       <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={100}>
      <div className="text-red-500 text-9xl bg-sky-300 w-full h-full flex items-center justify-center min-h-screen">
        {name}
        </div>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        timing={springTiming({ config: { damping: 90 } })}
        presentation={fade()}
      />
      <TransitionSeries.Sequence durationInFrames={100}>
        
      <div className="text-red-500 text-9xl bg-amber-300 w-full h-full flex items-right min-h-screen">
        {name}
        </div>
      
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: 50 })}
        presentation={wipe()}
      />
      <TransitionSeries.Sequence durationInFrames={100}>
      <div className="text-red-500 text-9xl bg-green-300 w-full h-full flex float-right min-h-screen">
        {name}
      </div> 
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide()}
        timing={linearTiming({ durationInFrames: 50 })}
      />
      <TransitionSeries.Sequence durationInFrames={100}>
      <div className="text-red-500 text-9xl bg-gradient-to-r from-orange-400 via-red-500 to-pink-5000 w-full h-full flex float-right min-h-screen">
        {name}
      </div> 
      </TransitionSeries.Sequence>
    </TransitionSeries>

        
      </h1>
    //</div>
  );
};
