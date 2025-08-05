
import React, { useState } from 'react';

const newsItems = [
  {
    date: 'April 2025',
    text: `Giulia's artwork was selected for the cover of Trends in Immunology for the April 2025 issue!`,
    link: 'https://www.cell.com/issue/S1471-4906%2824%29X0005-8',
    linkText: 'Check it out',
  },
	{
    date: 'April 2025',
    text: `Giulia's artwork was selected for the cover of Trends in Immunology for the April 2025 issue!`,
    link: 'https://www.cell.com/issue/S1471-4906%2824%29X0005-8',
    linkText: 'Check it out',
  },
	{
    date: 'April 2025',
    text: `Giulia's artwork was selected for the cover of Trends in Immunology for the April 2025 issue!`,
    link: 'https://www.cell.com/issue/S1471-4906%2824%29X0005-8',
    linkText: 'Check it out',
  },
	{
    date: 'April 2025',
    text: `Giulia's artwork was selected for the cover of Trends in Immunology for the April 2025 issue!`,
    link: 'https://www.cell.com/issue/S1471-4906%2824%29X0005-8',
    linkText: 'Check it out',
  },
  {
    date: 'March 2025',
    text: `Giulia's work A World of Smiles? longlisted for the Information is Beautiful Awards 2024!`,
    link: 'https://www.informationisbeautifulawards.com/showcase/7323-a-world-of-smiles',
    linkText: 'A World of Smiles?',
  },
  {
    date: 'January 2025',
    text: `Giulia's paper "Model Selection for Behavioral Learning Data and Applications to Contextual Bandits" accepted to AISTATS 2025.`,
  },
  {
    date: 'January 2025',
    text: `Mike's paper with Xuexin Wei, Representational Geometry Explains Puzzling Error Distributions in Behavioral Tasks, published in PNAS.`,
    link: 'https://www.pnas.org/doi/10.1073/pnas.2407540122',
    linkText: 'published in PNAS',
  },
  // Add more news items here as needed
];

const MAX_VISIBLE = 5;

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
