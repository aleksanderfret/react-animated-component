import React, { useState } from 'react';

import { FadeOut } from './components';

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
      </FadeOut>
    </>
  );
};

export default App;
