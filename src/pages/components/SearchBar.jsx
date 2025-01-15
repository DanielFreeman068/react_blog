import React, { useState } from 'react';
import '../css/SearchBar.css';

const SearchBar = ({ posts, setFilteredPosts }) => {
  const [query, setQuery] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        (post.category && post.category.toLowerCase().includes(query.toLowerCase())) ||
        (post.hashtags &&
          post.hashtags.some((hashtag) =>
            hashtag.toLowerCase().includes(query.toLowerCase())
          )) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search titles, hashtags, categories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
    </div>
  );
};

  
  export default SearchBar;