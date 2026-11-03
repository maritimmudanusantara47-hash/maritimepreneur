import React, { useState, useEffect } from 'react';
// FIX: Replaced react-feather (removed package) with react-icons/fi
import { FiArrowUp } from 'react-icons/fi';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showButton && (
        <button
          data-testid="buttonTop"
          className="fixed bottom-10 right-10 bg-primary-color text-white p-3 rounded-full shadow-lg z-50"
          onClick={scrollToTop}
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;

