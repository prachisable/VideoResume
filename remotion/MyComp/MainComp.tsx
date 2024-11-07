import {  Sequence } from 'remotion';
//import { Composition } from "remotion";
import  { Main } from './Main';
import { NextLogo } from './NextLogo';
import { TextFade } from './TextFade';
import { Rings } from './Rings';
import { Link } from './Link';
import { Add } from './Add';
import { Dec } from './Dec';

export const MainComp = () => {
  return (
    <>
      <Sequence from={5} durationInFrames={300}>
        <Main/>
      </Sequence>
      <Sequence from={300} durationInFrames={200}>
        <NextLogo />
      </Sequence>
      <Sequence from={500} durationInFrames={200}>
        <Rings />
      </Sequence>
      <Sequence from={700} durationInFrames={200}>
        <TextFade />
      </Sequence>
      <Sequence from={900} durationInFrames={200}>
        <Link />
      </Sequence>
      <Sequence from={1100} durationInFrames={200}>
        <Add />
      </Sequence>
      <Sequence from={1300} durationInFrames={200}>
        <Dec />
      </Sequence>
    </>
  );
};
