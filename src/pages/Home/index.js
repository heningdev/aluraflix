// src/pages/Home/index.js
import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import CategorySection from '../../components/CategorySection';
import EditModal from '../../components/EditModal';
import './Home.css';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [categorizedVideos, setCategorizedVideos] = useState({});
  const [editingVideo, setEditingVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:3000/videos');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const categorized = data.reduce((acc, video) => {
        const { category } = video;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(video);
        return acc;
      }, {});
      setVideos(data);
      setCategorizedVideos(categorized);
    } catch (error) {
      console.error('Erro ao buscar vídeos:', error);
    }
  };

  const handleEdit = (video) => {
    setEditingVideo(video);
  };

  const handleDelete = async (video) => {
    const category = video.category;
    try {
      await fetch(`http://localhost:3000/videos/${video.id}`, { method: 'DELETE' });
      setCategorizedVideos((prevState) => ({
        ...prevState,
        [category]: prevState[category].filter((v) => v.id !== video.id),
      }));
      setVideos((prevState) => prevState.filter((v) => v.id !== video.id));
    } catch (error) {
      console.error('Erro ao deletar vídeo:', error);
    }
  };

  const handleSave = (updatedVideo) => {
    const category = updatedVideo.category;
    setCategorizedVideos((prevState) => ({
      ...prevState,
      [category]: prevState[category].map((v) => (v.id === updatedVideo.id ? updatedVideo : v)),
    }));
    setVideos((prevState) => prevState.map((v) => (v.id === updatedVideo.id ? updatedVideo : v)));
    setEditingVideo(null);
  };

  return (
    <div className="home">
      <Banner videos={videos} />
      {Object.keys(categorizedVideos).length === 0 ? (
        <p>Nenhum vídeo encontrado.</p>
      ) : (
        Object.keys(categorizedVideos).map((category) => (
          <CategorySection
            key={category}
            title={category.charAt(0).toUpperCase() + category.slice(1)}
            videos={categorizedVideos[category]}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}
      {editingVideo && (
        <EditModal
          video={editingVideo}
          onSave={handleSave}
          onClose={() => setEditingVideo(null)}
        />
      )}
    </div>
  );
};

export default Home;
