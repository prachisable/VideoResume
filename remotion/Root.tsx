import { Composition } from "remotion";
import { MainComp } from "./MyComp/MainComp";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MainComp"
        component={MainComp}
        durationInFrames={1500}
        fps={30}
        width={1980}
        height={1080}
      />

      
    </>
  );
};

                                                                         