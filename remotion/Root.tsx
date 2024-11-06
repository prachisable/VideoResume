import { Composition } from "remotion";
import { Main } from "./MyComp/Main";
import { NextLogo } from "./MyComp/NextLogo";
import { TextFade } from "./MyComp/TextFade";
import { Rings } from "./MyComp/Rings";
import { Link } from "./MyComp/Link";
import { Add } from "./MyComp/Add";
import { Dec } from "./MyComp/Dec";


export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={250}
        fps={30}
        width={1980}
        height={1080}
        //passing the props
        defaultProps={{
          name: 'Prachi Sable',
        }} 
      />

      <Composition
        id="NextLogo"
        component={NextLogo}
        durationInFrames={300}
        fps={30}
        width={1980}
        height={1080}
      />
      <Composition
        id="TextFade"
        component={TextFade}
        durationInFrames={300}
        fps={30}
        width={1980}
        height={1080}
      />
      <Composition
        id="Rings"
        component={Rings}
        durationInFrames={300}
        fps={30}
        width={1980}
        height={1080}
      />
    <Composition
        id="Link"
        component={Link}
        durationInFrames={300}
        fps={30}
        width={1980}
        height={1080}
      />
      <Composition
        id="Add"
        component={Add}
        durationInFrames={300}
        fps={30}
        width={1980}
        height={1080}
      />
      <Composition
        id="Dec"
        component={Dec}
        durationInFrames={300}
        fps={30}
        width={1980}
        height={1080}
      />
    </>
  );
};

                                                                         