import { create } from "zustand";

export const useScreenSizeStore = create((set) => ({
    screenSize: getCurrentDimension(),
  
    updateScreenSize: () => {
      set({ screenSize: getCurrentDimension() });
    },
}));

function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }