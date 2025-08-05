
import React from 'react';
import newsItems from '../../data/news.json';


export default function NewsList() {
  // Always show all news items in a scrollable container
  return (
    <div>
      <ul
        style={{
          maxHeight: '300px',
          overflowY: 'auto',
          paddingRight: '8px',
        }}
      >
        {newsItems.map((item, idx) => (
          <li key={idx}>
            <strong>{item.date}:</strong> {item.text}
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer"> {item.linkText}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
