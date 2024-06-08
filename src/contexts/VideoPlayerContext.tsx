import { createContext } from "react";
import { defaultConfig } from "../config/defaultConfig";

const VideoPlayerContext = createContext<any>({
  // config: defaultConfig,
  // setVideoRef: () => {},
  // getVideoRef: () => undefined,
  // getVideoWrapperRef: () => null,
  // state: {} as any,
});

export default VideoPlayerContext;
