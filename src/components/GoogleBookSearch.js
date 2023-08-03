import React, { useState } from 'react'

const GoogleBookSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearch = () => {
        const apiKey = ''
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            searchQuery
          )}&key=${apiKey}`
    }

  return (
    <div>GoogleBookSearch</div>
  )
}

export default GoogleBookSearch