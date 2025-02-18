import { useState } from 'react';

const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggle}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>This is the text to showing</p>}
    </div>
  );
};

export default ShowHideText;
