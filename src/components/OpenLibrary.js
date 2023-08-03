import React, { useState } from 'react';

const OpenLibrary = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const searchBooks = () => {
      const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(
        searchQuery
      )}`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.docs || []);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setSearchResults([]);
        });
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Enter book title"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={searchBooks}>Search Books</button>
  
        {searchResults.length > 0 && (
          <div>
            <h2>Search Results</h2>
            <ul>
              {searchResults.map((book) => (
                <li key={book.key}>
                  <p>Title: {book.title}</p>
                  <p>Author(s): {book.author_name?.join(', ') || 'N/A'}</p>
                  {/* Display more book information as needed */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  

export default OpenLibrary
