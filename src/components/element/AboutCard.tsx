import Tilt from 'react-tilt'
import { useRef } from 'react'

const AboutCard = ({ index, title, icon }) => {
  const tiltRef = useRef(null)
  return (
    <div ref={tiltRef}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} >
        <ul className="card-wrapper">
          <img src={icon}></img>
          <p>{title}</p>
        </ul>
      </Tilt>
    </div>
  )
}

export default AboutCard