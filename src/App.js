import React, { useState } from 'react';

import { FadeIn, FadeInOut, FadeOut } from './components';

const App = () => {
  const [isVisible, setVisibility] = useState(false);

  const handleVisibility = () => setVisibility(isVisible => !isVisible);

  return (
    <>
      <button onClick={handleVisibility} type="button">
        {isVisible ? 'hide' : 'show'}
      </button>
      <FadeOut
        inDelay={1000}
        outDelay={3000}
        inDuration={5000}
        outDuration={2500}
        isVisible={isVisible}
      >
        <div
          style={{
            width: '300px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '18px',
            backgroundColor: 'red'
          }}
        >
          hello
        </div>
      </FadeOut>
      <FadeIn
        inDelay={1000}
        outDelay={3000}
        inDuration={5000}
        outDuration={2500}
        isVisible={isVisible}
      >
        <div
          style={{
            width: '300px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '18px',
            backgroundColor: 'green'
          }}
        >
          hello
        </div>
      </FadeIn>
      <FadeInOut
        inDelay={1000}
        outDelay={3000}
        outDuration={2500}
        inDuration={5000}
        isVisible={isVisible}
      >
        <div
          style={{
            width: '300px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '18px',
            backgroundColor: 'blue'
          }}
        >
          hello
        </div>
      </FadeInOut>
    </>
  );
};

export default App;
