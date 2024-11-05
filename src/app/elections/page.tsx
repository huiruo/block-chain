import React from 'react';
import Elections from '../../mdx/crypto/elections.mdx';

const Page: React.FC = () => {
  return <div style={{marginTop: '60px'}}>
    <iframe
      title="election-map"
      src="https://polymarket.com/embed/elections/map?event=presidency&theme=dark&creator=0x841e9627B67Ca2E957e8c55B4cF28Ec43B93651D-1730716765963"
      width="100%"
      height="600px"
      style={{
        height: '60vh'
      }}
    />

  <Elections />
  </div>
};

export default Page