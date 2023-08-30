import React from 'react'
import Footer from '../components/footer/footer';
import FirstFold from '../components/firstFold/firstFold';
import Faq from '../components/faq/faq';
import Parents from '../components/parents/Parents';
import LearningPrograms from '../components/learningPrograms/learningPrograms';
const Homepage = () => {
  return (
    <div>
      <FirstFold />
      <LearningPrograms />
      <Parents />
      <Faq />
      <Footer />
    </div>
  )
}

export default Homepage