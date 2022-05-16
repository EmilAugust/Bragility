import { useState, useEffect } from "react";

//Gets window size
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  //Sets windowDimensions variable to window size using the getWindowDimensions function.
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    //Adds resize event listner to window and runs handleResize function every time the event runs.
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Returns the windowDimensions so it can be used anywhere in the code.
  return windowDimensions;
}
