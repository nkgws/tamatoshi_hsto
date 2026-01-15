import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Pagination } from 'swiper/modules';
import { X } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';

import '../styles/ImageModal.css'; // We'll create this for custom swiper overrides if needed

const ImageModal = ({ images, onClose }) => {
    if (!images || images.length === 0) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onClick={(e) => {
                // Close if clicking outside the image (optional, but good UX)
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    color: 'white',
                    zIndex: 1001,
                    padding: '10px'
                }}
                aria-label="Close"
            >
                <X size={32} />
            </button>

            <div style={{ width: '100%', height: '80%' }}>
                <Swiper
                    style={{ width: '100%', height: '100%' }}
                    modules={[Zoom, Pagination]}
                    zoom={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={false} // "Stop at the last image" means no loop
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-zoom-container">
                                <img src={src} alt={`Slide ${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageModal;
