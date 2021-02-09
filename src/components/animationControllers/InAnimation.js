import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { cssTime } from '../../common/helpers';

const InAnimation = ({
  animationType,
  children,
  inDelay,
  inDuration,
  isVisible,
  onEnd,
  onStart,
  ...animationParams
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setTimeout(setShouldRender, inDelay, isVisible);
    } else {
      setShouldRender(isVisible);
    }
  }, [inDelay, isVisible]);

  const animationStyles = {
    animationDelay: '0ms',
    animationDuration: cssTime(isVisible ? inDuration : 0),
    animationName: isVisible ? `${animationType}In` : '',
    ...animationParams
  };

  return (
    shouldRender && (
      <div
        onAnimationEnd={onEnd}
        onAnimationStart={onStart}
        style={animationStyles}
      >
        {children}
      </div>
    )
  );
};

InAnimation.defaultProps = {
  inDelay: 0,
  inDuration: 300
};

InAnimation.propTypes = {
  animationType: PropTypes.string.isRequired,
  children: PropTypes.any,
  inDelay: PropTypes.number,
  inDuration: PropTypes.number,
  isVisible: PropTypes.bool,
  onEnd: PropTypes.func,
  onStart: PropTypes.func
};

export default InAnimation;
