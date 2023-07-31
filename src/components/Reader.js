import React from 'react'

const Reader = (props) => {
    let words = props.sentence.split(' ')
    let modifiedWords = []

    for(let i = 0; i < words.length; i++) {
        let word = words[i]
        let modifiedWord = ''

        for(let j = 0; i < word.length; j++) {
            let character = word[j]
            let halfLength = Math.ceil(word.length / 2)

            if(j < halfLength) {
                modified += '<b>' + character + '</b>'
            } else {
                modifiedWord += character
            }
        }
        modifiedWords.push(modifiedWord)
    }

    const modifiedSentence = modifiedWords.join(' ')
  return (
    <div>
        <p> dangerouslySetInnerHTML={{__html: modifiedSentence}}</p>
    </div>
  )
}

export default Reader