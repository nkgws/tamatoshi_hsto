import React from 'react';
import data from '../data/contents.json';
import { ChevronRight, Image } from 'lucide-react';

const MenuGrid = ({ onOpenModal }) => {
    return (
        <div style={{ padding: '0 var(--spacing-md) var(--spacing-md)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                {data.sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => onOpenModal(section.images)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 'var(--spacing-md)',
                            backgroundColor: 'white',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-sm)',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                            width: '100%',
                            textAlign: 'left'
                        }}
                    >
                        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', fontWeight: 'bold' }}>
                            <Image size={20} color="var(--color-text-secondary)" />
                            {section.title}
                        </span>
                        <ChevronRight size={20} color="var(--color-border)" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MenuGrid;
