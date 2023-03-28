import { useEffect, useState } from 'react'

type useMediaQuery = (query: string) => boolean;

export function useMediaQuery(query) {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    // add a listener for changes to the screen size and set the initial value of the width state variable
    const mediaQuery = window.matchMedia(query);
    setWidth(mediaQuery.matches);
    // define a callback function to handle changes to the media query and add this as a listener for changes
    const handleChange = (e) => { setWidth(e.matches); }
    mediaQuery.addEventListener('change', handleChange);

    // cleanup code that removes
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    }
  }, [query]);
  return width;
}
