import React from 'react';
import Intro from '../Pages/Intro';
import Aboutme from '../Pages/Aboutme';
import Education from '../Pages/Education';
import Skills from '../Pages/Skills';
import Project from '../Pages/Project';

const Home = () => {
    return (
        <>
          <Intro />  
          <Aboutme />
          <Education />
          <Skills />
        <Project />
        </>
    );
};

export default Home;