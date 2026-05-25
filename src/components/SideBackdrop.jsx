import React from 'react';

const SideBackdrop = () => (
  <div className="side-decor-wrap" aria-hidden="true">
    <div className="side-decor-panel side-decor-left">
      <div className="side-decor-grid" />
      <div className="side-decor-rail side-decor-rail-left" />
      <div className="side-decor-glow side-decor-glow-top" />
      <div className="side-decor-glow side-decor-glow-bottom" />
    </div>

    <div className="side-decor-panel side-decor-right">
      <div className="side-decor-grid" />
      <div className="side-decor-rail side-decor-rail-right" />
      <div className="side-decor-glow side-decor-glow-top" />
      <div className="side-decor-glow side-decor-glow-bottom" />
    </div>
  </div>
);

export default SideBackdrop;
