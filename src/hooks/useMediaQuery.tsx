import { useEffect, useState } from 'react'

type useMediaQuery = (query: string) => boolean;

export function useMediaQuery(query) {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    // add a listener for changes to the screen size
    const mediaQuery = window.matchMedia(query);

    // set the initial value of the width state variable
    setWidth(mediaQuery.matches);

    // define a callback function to handle changes to the media query
    const handleChange = (e) => {
      setWidth(e.matches);

      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      }
    }
  }, [query]);

  return width;
}
