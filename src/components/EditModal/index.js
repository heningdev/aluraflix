// src/components/EditModal/index.js
import React, { useState } from 'react';
import './EditModal.css';

const EditModal = ({ video, onSave, onClose }) => {
  const [videoData, setVideoData] = useState(video);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData({
      ...videoData,
      [name]: value
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/videos/${videoData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(videoData)
      });
      onSave(videoData);
    } catch (error) {
      console.error('Erro ao editar vídeo:', error);
    }
  };

  return (
    <div className="edit-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Editar Card</h2>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={videoData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Categoria:</label>
            <select
              id="category"
              name="category"
              value={videoData.category}
              onChange={handleChange}
              required
            >
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
              <option value="Inovação">Inovação</option>
              <option value="Gestão">Gestão</option>
              <option value="Podcast">Podcast</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">URL da Imagem:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={videoData.imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="videoUrl">URL do Vídeo:</label>
            <input
              type="text"
              id="videoUrl"
              name="videoUrl"
              value={videoData.videoUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição:</label>
            <textarea
              id="description"
              name="description"
              value={videoData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
