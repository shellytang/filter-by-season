import React from 'react';
import { Link } from 'react-router-dom'
import './about.css';

const About = () => {
  return (
    <div className="about">
      <p>Seasonal produce is fresh, affordable, and healthy. This seasonal produce guide was created to explore fruits and vegetables throughout the year.</p>
      <div className="resources">
        <Link className='homeLink' to='/'>Back to guide</Link>
        <p>Project resources and links</p>
        <a href="https://www.ams.usda.gov/local-food-directories/farmersmarkets" rel="noopener noreferrer" target="_blank">Find your local farmers market</a>
        <a href='https://www.fruitsandveggiesmorematters.org/' target='_blank' rel="noopener noreferrer">Fruits & Veggies - More Matters</a>
        <a href='https://snaped.fns.usda.gov/seasonal-produce-guide' target='_blank' rel="noopener noreferrer">USDA Seasonal Produce Guide</a>
      </div>
    </div>
  )
}

export default About;