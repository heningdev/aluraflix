// src/components/Banner/index.js
import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = ({ videos }) => {
  const [randomVideo, setRandomVideo] = useState(null);

  useEffect(() => {
    if (videos.length > 0) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      setRandomVideo(videos[randomIndex]);
    }
  }, [videos]);

  if (!randomVideo) {
    return null;
  }

  const categoryColors = {
    'Front-end': '#222831',
    'Back-end': '#393E46',
    'Inovação': '#00ADB5',
    'Gestão': '#3F72AF',
    'Podcast': '#0F4C75',
  };

  const categoryColor = categoryColors[randomVideo.category] || '';

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${randomVideo.imageUrl})`, backgroundColor: categoryColor }}
    >
      <div className="banner-content">
        <div className='video-text'>
        <h2 className="category-tag" style={{ backgroundColor: categoryColor }}>
          {randomVideo.category}
        </h2>
          <h1>{randomVideo.title}</h1>
          <p>{randomVideo.description}</p>
        </div>
        <div className="video-thumb">
          <a href={randomVideo.videoUrl} target="_blank" rel="noopener noreferrer">
            <img src={randomVideo.thumbUrl || randomVideo.imageUrl} alt={randomVideo.title} />
          </a>
        </div>
      </div>
    </div >
  );
};

export default Banner;
