import React, { useState } from 'react';
import BionicReader from './BionicReader';
import './reader.css'

const Reader = () => {
  const [inputSentence, setInputSentence] = useState('');
  const [modifiedSentence, setModifiedSentence] = useState('')
  const [fontSize, setFontSize] = useState(16)

  const handleInputChange = (event) => {
    setInputSentence(event.target.value);
  };

  const increaseFontSize = () => {
    setFontSize((previousFontSize) => previousFontSize + 2)
  }

  const decreaseFontSize = () => {
    setFontSize((previousFontSize) => Math.max(previousFontSize - 2, 10))
  }

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
          <p
            style={{ fontSize: `${fontSize}px` }}
            dangerouslySetInnerHTML={{ __html: modifiedSentence }} 
          />
        </div>
      )}
      <h4>Adjuct font size</h4>
      <button onClick={increaseFontSize}>+</button>
      <button onClick={decreaseFontSize}>-</button>
    </div>
  );
};

export default Reader;