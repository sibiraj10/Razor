import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const val = localStorage.getItem('isDarkMode');
    if (val !== null) {
      setIsDarkMode(JSON.parse(val));
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode)); 
      return newMode;
    });
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
       <p>DarkModeToggle</p>
    </div>
  );
};

export default DarkModeToggle;
