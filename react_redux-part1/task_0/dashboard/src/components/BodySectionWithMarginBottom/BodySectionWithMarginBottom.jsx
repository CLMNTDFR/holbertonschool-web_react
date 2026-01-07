import React from 'react';
import BodySection from '../BodySection/BodySection';

function BodySectionWithMarginBottom({ title, children }) {
  return (
    <div className="bodySectionWithMargin">
      <BodySection title={title}>
        {children}
      </BodySection>
    </div>
  );
}

export default BodySectionWithMarginBottom;