import React from 'react';
import data from '../data/contents.json';
import { Smartphone } from 'lucide-react';

const ArLinks = () => {
    return (
        <div style={{ padding: 'var(--spacing-md)' }}>
            <h2 style={{
                fontSize: '1rem',
                marginBottom: 'var(--spacing-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)'
            }}>
                <Smartphone size={20} /> AR体験
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--spacing-md)'
            }}>
                {data.arLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            border: '2px solid var(--color-primary)',
                            borderRadius: 'var(--radius-md)',
                            padding: 'var(--spacing-md)',
                            color: 'var(--color-primary)',
                            fontWeight: 'bold',
                            aspectRatio: '16/9' // Keeps buttons nice and clickable
                        }}
                    >
                        {link.label}
                        <span style={{ fontSize: '0.8rem', marginTop: '4px' }}>View AR</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ArLinks;
