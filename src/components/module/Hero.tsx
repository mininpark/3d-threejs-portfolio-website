import { ComputersCanvas } from '../canvas';

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="section-hero__wrapper paddingX">
        <div className="section-hero__shapes">
          <div className="section-hero__shapes-circle" />

          <div className="section-hero__shapes-line violet-gradient" />
        </div>
        <div>
          <h1 className="heroHeadText font-white">Hey <span>Hey</span></h1>
          <p className="heroSubText font-white">I develop 3D visuals, User <br className="dynamic-br" />interfaces and web applications</p>
        </div>
      </div>
      {/* 3D Model Canvas */}
      <ComputersCanvas />
      <div className="section-hero__toggle-btn">
        <a href="#about">
          <div className="outer-container">
            <div className="circle" ></div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero