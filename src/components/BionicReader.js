const BionicReader = ({ inputSentence, setModifiedSentence }) => {
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

  return
}

export default BionicReader