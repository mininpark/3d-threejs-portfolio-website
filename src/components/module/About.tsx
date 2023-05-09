import SubText from '../element/Subtext';
import AboutCard from '../element/AboutCard';
import { aboutText, aboutCard } from '../../constants';
import { SectionWrapper } from '../../hoc'

const About = () => {
  return (
    <section className="section-about paddingX">
      <SubText text={aboutText} />
      <div className="section-about__cards">
        {aboutCard.map((about, index: number) => (
          <AboutCard key={about.title} index={index} {...about} />
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(About, "about")