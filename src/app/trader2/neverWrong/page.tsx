import React from 'react';
import { LayoutWrapper } from '@/components/layout/layoutWrapper';
import MdxComponent from '../../../mdx/trader2/00-市场永远不会错.mdx';

const Page: React.FC = () => {
  return <LayoutWrapper>
    <MdxComponent />
  </LayoutWrapper>
};

export default Page