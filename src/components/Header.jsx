import React from 'react';

const Header = () => {
  return (
    <header style={{
      padding: 'var(--spacing-md)',
      borderBottom: '1px solid var(--color-border)',
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '1.25rem' }}>鉄道延伸事業</h1>
    </header>
  );
};

export default Header;
