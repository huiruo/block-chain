import React from 'react';
import { Layout } from '../../components/layout';

const About: React.FC = () => {
  return <div className='wrapper-box'>
    <div className='wrapper-container'>
      <Layout />
      <div className='md-box'>
        <h1>About Us</h1>
      </div>
    </div>
  </div>
};

export default About;