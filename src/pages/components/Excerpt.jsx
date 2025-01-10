import React from 'react';
import '../css/Excerpt.css'; 

export default function Excerpt({ excerpt, limit = 20 }) {
    const words = excerpt.split(' ');
    const isTruncated = words.length > limit;
  
    const displayedText = isTruncated
      ? words.slice(0, limit).join(' ') + '...'
      : excerpt;
  
    return (
      <div>
        <span className="excerpt-text">{displayedText}</span>
        {isTruncated && <span className="read-more-label"> Read more</span>}
      </div>
    );
  }