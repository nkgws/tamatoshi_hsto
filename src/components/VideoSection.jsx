import React from 'react';
import data from '../data/contents.json';
import { Youtube, ExternalLink } from 'lucide-react';

const VideoSection = () => {
    const { video } = data;

    return (
        <div style={{ padding: '0 var(--spacing-md) var(--spacing-md)' }}>
            <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--spacing-md)',
                    backgroundColor: '#FF0000', /* YouTube Red accent for recognition, or could stay Agency Blue */
                    color: 'white',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textDecoration: 'none',
                    width: '100%',
                    fontWeight: 'bold'
                }}
            >
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                    <Youtube size={24} />
                    {video.title}
                </span>
                <ExternalLink size={20} />
            </a>
        </div>
    );
};

export default VideoSection;
