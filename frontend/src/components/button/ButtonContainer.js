import React from 'react';

export default function ButtonContainer({ children }) {
  return <div style={styles.container}>{children}</div>;
}

const styles = {
  container: {
    padding: '10px',
    margin: '10px',
  },
};
