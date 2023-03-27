import { useRef, useLayoutEffect } from 'react';
import { ComputersCanvas } from './canvas';
import { gsap } from 'gsap';


const Hero = () => {
  const toggleRef = useRef(null);

  useLayoutEffect(() => {
    console.log(toggleRef)
    gsap.fromTo(toggleRef.current,
      1,
      { y: 30 },
      {
        y: 0,
        repeat: -1,
        yoyo: true
      })

  }, [])

  return (
    <section className="section-hero">
      <div className="section-hero__wrapper paddingX">
        <div className="section-hero__shapes">
          <div className="section-hero__shapes-circle" />

          <div className="section-hero__shapes-line violet-gradient" />
        </div>
        <div>
          <h1 className="heroHeadText font-white">Hi, I'm <span>Mina</span></h1>
          <p className="heroSubText font-white">I develop 3D visuals, User <br className="dynamic-br" />interfaces and web applications</p>
        </div>
      </div>

      <ComputersCanvas />
      <div className="section-hero__toggle-btn">
        <a href="#about">
          <div className="outer-container">
            <div className="circle" ref={toggleRef}></div>
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero