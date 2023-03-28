const AboutCard = ({ index, title, icon }) => {
  return (
    <ul className="card-wrapper">
      <img src={icon}></img>
      <p>{title}</p>
    </ul>
  )
}

export default AboutCard