import { useRef } from 'react'
import Tilt from 'react-tilt'
import { github } from '../../assets'
import { SectionWrapper } from '../../hoc'
import { projects, worksText } from '../../constants'
import SubText from '../element/Subtext'

const WorksCard = ({ index, name, description, tags, image, source_code_link }) => {
  const tiltRef = useRef(null)
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="work__tilt" ref={tiltRef}>
      {/* Tilt is a tiny requestAnimationFrame powered 60+fps lightweight parallax hover effect for ReactJS. */}
      <div className="work__card">
        <img src={image} alt={name} className="work__img" />
        <div className="work__link card-img_hover">
          <div className="work__link-github black-gradient" onClick={() => window.open(source_code_link, "_blank")}>
            <img src={github} alt="github" className="work__link-img" />
          </div>
        </div>
      </div>
      <div className="work__text">
        <h3 className="work__text-title">{name}</h3>
        <p className="work__text-description">{description}</p>
      </div>
      <div className="work__hashtags">
        {tags.map((tag) => (
          <p key={tag.name} className={`work__hashtag ${tag.color}`}>#{tag.name}</p>
        ))}
      </div>
    </Tilt>
  )
}

const Works = () => {
  return (
    <div className="section-works paddingX">
      <SubText text={worksText} />
      <div className="section-works__cards">
        {projects.map((project, index) => (
          <WorksCard
            key={`work-${index}`}
            index={index}
            {...project} />
        ))}

      </div>
    </div>
  )
}

export default SectionWrapper(Works, "work")