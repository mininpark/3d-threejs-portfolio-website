import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const secWrapper = useRef();

    useEffect(() => {
      gsap.fromTo(
        secWrapper.current,
        { autoAlpha: 0, y: 100 },
        {
          duration: 2,
          autoAlpha: 1,
          ease: 'power',
          y: -50,
          scrollTrigger: {
            trigger: secWrapper.current,
            scrub: 1,
          },
        },
      );
    }, []);
    return (
      <section ref={secWrapper} className="section__container">
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </section>
    );
  };

export default SectionWrapper;
