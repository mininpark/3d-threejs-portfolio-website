import React from 'react'
import Tilt from 'react-tilt'
import { github } from '../../assets'
import { SectionWrapper } from '../../hoc'
import { projects, worksText } from '../../constants'
import SubText from '../element/Subtext'

const Works = () => {
  return (
    <div className="section-works paddingX">
      <SubText text={worksText} />
      <p className="section-works__text">
        Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and leve demos in it. It refelects my ability to solve complex problems, work with different techs and manage projects effectiviely.
      </p>
      <div className="section-works__cards">

      </div>
    </div>
  )
}

export default SectionWrapper(Works, "work")