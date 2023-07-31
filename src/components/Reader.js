import React, { useState } from 'react';
import ModifiedSentence from './ModifiedSentence'; // Make sure to import the correct path for ModifiedSentence component

const Reader = () => {
  const [inputSentence, setInputSentence] = useState('');
  const [modifiedSentence, setModifiedSentence] = useState('');

  const handleInputChange = (event) => {
    setInputSentence(event.target.value);
  };

  const modifySentence = () => {
    let words = inputSentence.split(' ');
    let modifiedWords = [];

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let modifiedWord = '';

      for (let j = 0; j < word.length; j++) {
        let character = word[j];
        let halfLength = Math.ceil(word.length / 2);

        if (j < halfLength) {
          modifiedWord += '<b>' + character + '</b>';
        } else {
          modifiedWord += character;
        }
      }

      modifiedWords.push(modifiedWord);
    }

    const modified = modifiedWords.join(' ');
    setModifiedSentence(modified);
  };

  return (
    <div className="reader-container">
      <textarea
        rows="10"
        cols="50"
        value={inputSentence}
        onChange={handleInputChange}
        placeholder="Enter your content"
      />
      <button onClick={modifySentence}>Bionic Reader</button>
      {modifiedSentence && (
        <div>
          <p dangerouslySetInnerHTML={{ __html: modifiedSentence }} />
        </div>
      )}
    </div>
  );
};

export default Reader;