import React from 'react';

import CategoryList from '.';

const data = [
  {
    title: 'Leaders',
    href: ''
  },
  {
    title: 'World',
    href: '',
    children: [
      {
        title: 'Britain',
        children: [
          {
            title: 'Coalition, the Sequel',
            text: 'Hung Parliament',
            href: ''
          },
          {
            title: 'After the referendum',
            text: 'What happens next for Scotland',
            href: ''
          },
          {
            title: 'Italian lessons',
            text: 'Friendly advice for 2015',
            href: ''
          },
          {
            title: 'Land Rover Defender, RIP',
            text: 'The end of the line for the boneshaker',
            href: ''
          },
          {
            title: 'Plane thinking',
            text: 'Where to fit London\'s new airport',
            href: ''
          },
          {
            title: 'Keeping the light on',
            text: 'Britain will avoid a blackout-Just',
            href: ''
          },
          {
            title: 'Estente frugale',
            text: 'Francois Heisbourg on Britain\'s relations with France',
            href: ''
          }
        ]
      },
      {
        title: 'Europe'
      },
      {
        title: 'United States'
      },
      {
        title: 'The Americas'
      },
      {
        title: 'Asia'
      },
      {
        title: 'China'
      },
      {
        title: 'Middle East & Africa'
      },
      {
        title: 'International'
      }
    ]
  },
  {
    title: 'Business & Finance',
    href: ''
  },
  {
    title: 'Science & Tech',
    href: ''
  },
  {
    title: 'Culture',
    href: ''
  },
  {
    title: 'Specials',
    href: ''
  }
];

const activeCategory = 'World';
const activeSubcategory = 'Britain';

export default (
  <CategoryList
    data={data}
    activeCategory={activeCategory}
    activeSubcategory={activeSubcategory} />
);
