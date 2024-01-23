import React from 'react';

const FullScreenContainer = ({ children, containerStyle }) => {
    const defaultContainerStyle = {
        backgroundColor: "#F4FCFE",
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      };
      
  return (
    <div style={{...defaultContainerStyle, ...containerStyle}}>
      {children}
    </div>
  );
};

export default FullScreenContainer;