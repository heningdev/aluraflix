// src/pages/NewVideo/index.js
import React, { useState } from 'react';
import './NewVideo.css';

const NewVideo = () => {
  const [video, setVideo] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo({
      ...video,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api-aluraflix-three.vercel.app/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(video)
      });
      const data = await response.json();
      console.log('Video salvo:', data);
      // Limpar formulário pos salvar
      setVideo({
        title: '',
        category: '',
        imageUrl: '',
        videoUrl: '',
        description: ''
      });
    } catch (error) {
      console.error('Erro ao salvar vídeo:', error);
    }
  };

  return (
    <div className="new-video">
      <main>
        <h1>Novo Vídeo</h1>
        <p>Adicionar um novo vídeo</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={video.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Categoria:</label>
            <select
              id="category"
              name="category"
              value={video.category}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
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
              value={video.imageUrl}
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
              value={video.videoUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição:</label>
            <textarea
              id="description"
              name="description"
              value={video.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit">Salvar</button>
            <button type="reset" onClick={() => setVideo({ title: '', category: '', imageUrl: '', videoUrl: '', description: '' })}>Limpar</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default NewVideo;
