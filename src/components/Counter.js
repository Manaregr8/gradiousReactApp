import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      backgroundColor: '#eee',
      padding: '20px',
      textAlign: 'center',
      width: '200px',
      borderRadius: '8px',
      margin: '50px auto',
      fontFamily: 'Arial'
    }}>
      <h1>Counter: {count}</h1>
      <div style={{display:'flex',}}>
      <button
        style={buttonStyle}
        onClick={() => setCount(count - 1)}
      >
        decrease
      </button>
      <button
        style={{ ...buttonStyle, marginLeft: '10px' }}
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#1976d2',
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default Counter;
