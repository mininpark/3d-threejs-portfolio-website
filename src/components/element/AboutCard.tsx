import Tilt from 'react-tilt'

const AboutCard = ({ index, title, icon }) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
      <ul className="card-wrapper">
        <img src={icon}></img>
        <p>{title}</p>
      </ul>
    </Tilt>
  )
}

export default AboutCard