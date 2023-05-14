import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';

const Technology = () => {
  return (
    <div className="section-tech paddingX row justify-content-center">
      {technologies.map((tech) => (
        <div key={tech.name} className="tech__ball" style={{ width: '7rem', height: '7rem' }}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Technology, "technology")