import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState(['']);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setData([...data, text]);
    setText('');
    setSuccessMessage(`"${text}" added successfully`);
  };

  const handleDownload = () => {
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'dataset.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Prompt Dataset Generator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: '500px', height: '200px' }}
        />
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      <button onClick={handleDownload} style={{ marginTop: '20px' }}>
        Generate Dataset
      </button>
    </div>
  );
};

export default Home;
