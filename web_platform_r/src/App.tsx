import React, { useState, useEffect, useContext } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ThemeContext } from './ThemeContext'; 
import { developerStatuses } from './resources/developerStatus';
import './App.css';

const App: React.FC = () => {
  const themeContext = useContext(ThemeContext);  // Always call the hook here, not conditionally
  const [currentStatus, setCurrentStatus] = useState(developerStatuses[0]);
  const [layout, setLayout] = useState('layout1');

  // Ensure themeContext is defined before proceeding with the rest of the code
  if (!themeContext) {
    return null;  // You can still return null, just ensure this logic is outside the hook calls
  }

  const { theme, toggleTheme } = themeContext;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus((prevStatus) => {
        const nextIndex = (developerStatuses.indexOf(prevStatus) + 1) % developerStatuses.length;
        return developerStatuses[nextIndex];
      });
    }, 5000);

    // Rotate layouts every 10 seconds
    const layoutInterval = setInterval(() => {
      setLayout((prevLayout) => (prevLayout === 'layout1' ? 'layout2' : 'layout1'));
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(layoutInterval);
    };
  }, []); // Ensure this effect runs only once on mount

  // Layout 1 (current layout)
  const layout1 = (
    <div className={`relative flex flex-col items-center justify-center px-4 -pt-2 pb-8 max-w-[415px] ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-500'} shadow-lg rounded-sm`}>
      <div className="relative -top-16">
        <button onClick={toggleTheme} className="relative">
          <img
            alt="Profile Picture"
            className="w-36 h-36 rounded-full shadow-lg border-4 border-white object-cover"
            width={144}
            height={144}
          />
          <div
            className="absolute top-0 right-0 w-8 h-8 bg-red-400/80 rounded-full flex items-center justify-center text-white text-xl cursor-pointer hover:bg-red-300/80 transition"
            title={`${currentStatus.status}: ${currentStatus.meaning}`}
          >
            {currentStatus.emoji}
          </div>
        </button>
      </div>

      <div className="text-center mt-0">
        <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Full Stack Developer & Software Engineer
        </h3>
      </div>

      <div className="flex flex-col items-center mt-6 px-4">
        <div className="mb-4 text-center px-4">
          <div className={`py-3 px-4`}>
            <hr className={`border-1 ${theme === 'dark' ? 'border-white' : 'border-gray-900'} mb-4`} />
            <p className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed text-justify ${theme === 'dark' ? 'text-white' : 'text-gray-900'} pt-sans-regular`}>
              Exploring new ways to build and innovate. Happy to connect and refer!
            </p>
            <hr className={`border-1 ${theme === 'dark' ? 'border-white' : 'border-gray-900'} mt-4`} />
          </div>
        </div>

        <div className="flex space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/themba-mzumara-496330160/" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}><FaLinkedin /></a>
          <a href="https://github.com/ThembaMzumara" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}><FaGithub /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}><FaInstagram /></a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-[#262629]' : 'bg-[#d5d5d5]'}`}>
      {layout === 'layout1' ? layout1 : layout1} {/* Add another layout option if needed */}
    </div>
  );
}

export default App;
