import React, { useEffect, useState } from 'react';

function Offer({ productSectionRef }) {
  const [timeLeft, setTimeLeft] = useState(36000); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleShopNowClick = () => {
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="limited-time-offer">
      <h2>Limited Time Offer!</h2>
      <p>Get up to 30% off on select jewelry items.</p>
      <div className="countdown-timer">
        <p>Hurry! Offer ends in:</p>
        <div id="timer">{formatTime(timeLeft)}</div>
      </div>
      <button className="shop-now-btn" onClick={handleShopNowClick}>
        Shop Now
      </button>
    </div>
  );
}

export default Offer;
