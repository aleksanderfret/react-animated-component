import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { cssTime } from '../../common/helpers';

const OutAnimation = ({
  animationType,
  children,
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
      setShouldRender(isVisible);
    }
  }, [isVisible]);

  const animationStyles = {
    animationDelay: cssTime(isVisible ? 0 : outDelay),
    animationDuration: cssTime(isVisible ? 0 : outDuration),
    animationName: isVisible ? '' : `${animationType}Out`,
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

OutAnimation.defaultProps = {
  outDelay: 0,
  outDuration: 300
};

OutAnimation.propTypes = {
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

export default OutAnimation;
