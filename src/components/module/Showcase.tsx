import React, { useLayoutEffect, useRef } from 'react'
import ColumnWrap from '../element/ColumnWrap';
import { ShowcaseImgs } from '../../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  // create an array of columns
  const columns = Array.from({ length: 3 }, () => []);
  // console.log(columns);

  // distribute items evenly among columns
  ShowcaseImgs.forEach((item, index) => {
    const columnIndex = index % columns.length;
    columns[columnIndex].push(item);
  });

  return (
    <section className="section-showcase">
      <div className="columns" id="element">
        {columns.map((column) => (
          <ColumnWrap column={column} />
        ))}
      </div>
    </section>
  )
}

export default Showcase