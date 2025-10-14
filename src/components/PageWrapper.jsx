import React from 'react';

export default function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      <div className="page-enter">{children}</div>
    </div>
  );
}
