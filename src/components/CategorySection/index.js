import React from 'react';
import VideoCard from '../VideoCard';
import './CategorySection.css';

const categoryColors = {
  'Front-end': '#222831',
  'Back-end': '#393E46',
  'Inovação': '#00ADB5',
  'Gestão': '#3F72AF',
  'Podcast': '#0F4C75',
};

const CategorySection = ({ title, videos, onEdit, onDelete }) => {
  const categoryColor = categoryColors[title] || '';

  return (
    <div className="category-section">
      <h2 className="category-title" style={{ backgroundColor: categoryColor }}>
        {title}
      </h2>
      <div className="videos">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onEdit={() => onEdit(video)}
            onDelete={() => onDelete(video)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
