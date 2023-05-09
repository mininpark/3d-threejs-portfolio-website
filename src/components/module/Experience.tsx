import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experienceText, experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import SubText from '../element/Subtext';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="justify-content-center w-100 h-100" style={{ paddingTop: '18%' }}>
        <img src={experience.icon}
          alt={experience.company_name}
          style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
      </div>
    }
  >
    <div className="timeline-inner">
      <h3>{experience.title}</h3>
      <p>{experience.company_name}</p>
    </div>
    <ul>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement >
)


const Experience = () => {
  return (
    <div className="section-experience paddingX">
      <SubText text={experienceText} />
      <div className="section-experience__timeline">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "experience")