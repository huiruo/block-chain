import React from 'react';
import { Layout } from '../../components/layout';

const Dashboard: React.FC = () => {

  return <div className='wrapper-box'>
    <div className='wrapper-container'>
      <Layout />
      <div className='md-box'>
        <h1>Dashboard</h1>
      </div>
    </div>
  </div>
};

export default Dashboard