// src/components/AmpCard.tsx
import React from 'react';

const AmpCard: React.FC = () => {
  return (
    <div>
      <amp-img
        src="https://via.placeholder.com/150"
        width="150"
        height="150"
        layout="responsive"
        alt="Placeholder"
      ></amp-img>
      <p>This is an AMP card component.</p>
    </div>
  );
};

export default AmpCard;
