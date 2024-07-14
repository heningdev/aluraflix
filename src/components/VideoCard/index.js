// src/components/VideoCard/index.js
import React from 'react';
import './VideoCard.css';
import { BiEdit, BiTrash } from "react-icons/bi";

const VideoCard = ({ video, onEdit, onDelete }) => {
  return (
    <div className="video-card">
      <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={video.imageUrl} alt={video.title} className="video-image" />
      </a>
      <div className="video-actions">
        <button onClick={() => onDelete(video)} className="delete-button"><BiTrash size={20} />
        </button>
        <button onClick={() => onEdit(video)} className="edit-button"><BiEdit size={20} /></button>
      </div>
    </div>
  );
};

export default VideoCard;
