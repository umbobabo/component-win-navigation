import React from 'react';

import Navigation from '.';
import json from './test/data';

// [
//   {
//     title: 'Leaders',
//     href: '',
//     childs: [
//       {
//         title: 'Leaders',
//         childs: [
//           {
//             title: 'Who should lead the world',
//             text: '',
//             href: '',
//           },
//           {
//             title: 'Into Africa',
//             text: '',
//             href: '',
//           },
//           {
//             title: 'Europe renegotiated',
//             text: '',
//             href: '',
//           },
//           {
//             title: 'The feminisation of business',
//             text: '',
//             href: '',
//           },
//           {
//             title: 'All change for the world economy',
//             text: '',
//             href: '',
//           },
//           {
//             title: 'Faster, higher, stronger: how to succeed at the Olympics',
//             text: '',
//             href: '',
//           },
//           {
//             title: 'Tech\'s year of the unicorn',
//             text: '',
//             href: '',
//           },
//           {
//             title: 'What the UN drugs summit should decide',
//             text: '',
//             href: '',
//           },
//           {
//             title: 'Big is beautiful',
//             text: '',
//             href: '',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: 'World',
//     href: '',
//     childs: [
//       {
//         title: 'Britain',
//         childs: [
//           {
//             title: 'Coalition, the Sequel',
//             text: 'Hung Parliament',
//             href: '',
//           },
//           {
//             title: 'After the referendum',
//             text: 'What happens next for Scotland',
//             href: '',
//           },
//         ],
//       },
//     ],
//   }
//   ... etc ...
// ]
const data = json;
const activeCategory = 'World';
const activeSubcategory = 'Britain';
export default (
  <Navigation
    data={data}
    activeCategory={activeCategory}
    activeSubcategory={activeSubcategory}
  />
);
