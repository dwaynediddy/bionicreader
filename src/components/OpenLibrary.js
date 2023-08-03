import React, { useState } from 'react';
import './library.css'

const OpenLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
        setDropdownOpen(true); // Open the dropdown
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setSearchResults([]);
      });
  };

  const handleSelectBook = (book) => {
    // Placeholder function to handle book selection
    console.log('Selected book:', book);
    setDropdownOpen(false); // Close the dropdown
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

      {dropdownOpen && (
        <div className="dropdown">
          <ul>
            {searchResults.map((book) => (
              <li key={book.key} onClick={() => handleSelectBook(book)}>
                {book.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OpenLibrary;
