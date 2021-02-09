import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { cssTime } from '../../common/helpers';

const InOutAnimation = ({
  animationType,
  children,
  inDelay,
  inDuration,
  isVisible,
  onEnd,
  onStart,
  outDelay,
  outDuration,
  ...animationParams
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setTimeout(setShouldRender, inDelay, isVisible);
    }
  }, [inDelay, isVisible]);

  const animationStyles = {
    animationDelay: cssTime(isVisible ? 0 : outDelay),
    animationDuration: cssTime(isVisible ? inDuration : outDuration),
    animationName: `${animationType}${isVisible ? 'In' : 'Out'}`,
    ...animationParams
  };

  const handleAnimationStart = () => {
    onStart();
  };

  const handleAnimationEnd = () => {
    if (!isVisible) {
      setShouldRender(false);
    }

    if (onEnd) {
      onEnd();
    }
  };

  return (
    shouldRender && (
      <div
        onAnimationEnd={handleAnimationEnd}
        onAnimationStart={onStart ? handleAnimationStart : undefined}
        style={animationStyles}
      >
        {children}
      </div>
    )
  );
};

InOutAnimation.defaultProps = {
  inDelay: 0,
  inDuration: 300,
  outDelay: 0,
  outDuration: 300
};

InOutAnimation.propTypes = {
  animationType: PropTypes.string.isRequired,
  children: PropTypes.any,
  inDelay: PropTypes.number,
  inDuration: PropTypes.number,
  isVisible: PropTypes.bool,
  onEnd: PropTypes.func,
  onStart: PropTypes.func,
  outDelay: PropTypes.number,
  outDuration: PropTypes.number
};

export default InOutAnimation;
