import React, { useState } from 'react';
import BionicReader from './BionicReader';
import './reader.css'

const Reader = () => {
  const [inputSentence, setInputSentence] = useState('');
  const [modifiedSentence, setModifiedSentence] = useState('');

  const handleInputChange = (event) => {
    setInputSentence(event.target.value);
  };

  return (
    <div className="reader-container">
      <textarea
        rows="10"
        cols="50"
        value={inputSentence}
        onChange={handleInputChange}
        placeholder="Enter your content"
        className='input-container'
      />
      <button
      className='bionic-button'
        onClick={() => {
          // Pass inputSentence and setModifiedSentence to BionicReader
          BionicReader({ inputSentence, setModifiedSentence });
        }}
      >
        Bionic Reader
      </button>
      {modifiedSentence && (
        <div className='output-container'>
          <p dangerouslySetInnerHTML={{ __html: modifiedSentence }} />
        </div>
      )}
    </div>
  );
};

export default Reader;