import React, { useState } from 'react';
import Header from './components/Header';
import ArLinks from './components/ArLinks';
import VideoSection from './components/VideoSection';
import MenuGrid from './components/MenuGrid';
import ImageModal from './components/ImageModal';

function App() {
  const [modalImages, setModalImages] = useState(null);

  const handleOpenModal = (images) => {
    setModalImages(images);
  };

  const handleCloseModal = () => {
    setModalImages(null);
  };

  return (
    <div className="App">
      <Header />
      <main style={{ paddingBottom: 'var(--spacing-xl)' }}>
        <ArLinks />
        <MenuGrid onOpenModal={handleOpenModal} />
        <VideoSection />
      </main>

      <ImageModal images={modalImages} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
