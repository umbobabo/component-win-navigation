import React from 'react';

import CategoryList from '.';

const data = [
  {
    title: 'Leaders',
    href: '',
    childs: [
      {
        title: 'Leaders',
        childs: [
          {
            title: 'Who should lead the world',
            text: '',
            href: '',
          },
          {
            title: 'Into Africa',
            text: '',
            href: '',
          },
          {
            title: 'Europe renegotiated',
            text: '',
            href: '',
          },
          {
            title: 'The feminisation of business',
            text: '',
            href: '',
          },
          {
            title: 'All change for the world economy',
            text: '',
            href: '',
          },
          {
            title: 'Faster, higher, stronger: how to succeed at the Olympics',
            text: '',
            href: '',
          },
          {
            title: 'Tech\'s year of the unicorn',
            text: '',
            href: '',
          },
          {
            title: 'What the UN drugs summit should decide',
            text: '',
            href: '',
          },
          {
            title: 'Big is beautiful',
            text: '',
            href: '',
          },
        ],
      },
    ],
  },
  {
    title: 'World',
    href: '',
    childs: [
      {
        title: 'Britain',
        childs: [
          {
            title: 'Coalition, the Sequel',
            text: 'Hung Parliament',
            href: '',
          },
          {
            title: 'After the referendum',
            text: 'What happens next for Scotland',
            href: '',
          },
          {
            title: 'Italian lessons',
            text: 'Friendly advice for 2015',
            href: '',
          },
          {
            title: 'Land Rover Defender, RIP',
            text: 'The end of the line for the boneshaker',
            href: '',
          },
          {
            title: 'Plane thinking',
            text: 'Where to fit London\'s new airport',
            href: '',
          },
          {
            title: 'Keeping the light on',
            text: 'Britain will avoid a blackout-Just',
            href: '',
          },
          {
            title: 'Estente frugale',
            text: 'Francois Heisbourg on Britain\'s relations with France',
            href: '',
          },
        ],
      },
      {
        title: 'Europe',
        childs: [
          {
            title: 'Leaders and laggards',
            text: '',
            href: '',
          },
          {
            title: 'Russia\'s squeeze',
            text: '',
            href: '',
          },
          {
            title: 'The race to succeed Merkel',
            text: '',
            href: '',
          },
          {
            title: 'Waiting for Sarko',
            text: '',
            href: '',
          },
          {
            title: 'Italy\'s renaissance',
            text: '',
            href: '',
          },
          {
            title: 'Humboldt Forum',
            text: '',
            href: '',
          },
          {
            title: 'A century of daylight savings',
            text: '',
            href: '',
          },
          {
            title: 'The coalition of the scared: a Nordic mini-Nato',
            text: '',
            href: '',
          },
          {
            title: 'Ireland remembers: the Easter rising and the Somme',
            text: '',
            href: '',
          },
          {
            title: 'Europe\'s southern challenge',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'United States',
        childs: [
          {
            title: 'Clinton v Bush, again',
            text: '',
            href: '',
          },
          {
            title: 'Lame duck quacking: Barack Obama\'s final year',
            text: '',
            href: '',
          },
          {
            title: 'The economy: living with higher interest rates',
            text: '',
            href: '',
          },
          {
            title: 'The next culture wars',
            text: '',
            href: '',
          },
          {
            title: 'At last, the Museum of African-American history',
            text: '',
            href: '',
          },
          {
            title: 'The Super Bowl at 50',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'The Americas',
        childs: [
          {
            title: 'Rio goes for gold',
            text: '',
            href: '',
          },
          {
            title: 'A regional-round up',
            text: '',
            href: '',
          },
          {
            title: 'The new Panama canal',
            text: '',
            href: '',
          },
          {
            title: 'The agenda for post-eletion Canada',
            text: '',
            href: '',
          },
          {
            title: 'When the world comes to Rio',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'Asia',
        childs: [
          {
            title: 'Responding to China\'s rise',
            text: '',
            href: '',
          },
          {
            title: 'All (well, some) change in Vietnam and Laos',
            text: '',
            href: '',
          },
          {
            title: 'India hosts Cricket\'s T20 World Cup',
            text: '',
            href: '',
          },
          {
            title: 'Controversy over Japan\'s constitution',
            text: '',
            href: '',
          },
          {
            title: 'Japan v China: digging at the Marianas trench',
            text: '',
            href: '',
          },
          {
            title: 'Australia heads for an early election',
            text: '',
            href: '',
          },
          {
            title: 'The reform raj',
            text: '',
            href: '',
          },
          {
            title: 'Educating Asia',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'China',
        childs: [
          {
            title: 'Questions of clout',
            text: '',
            href: '',
          },
          {
            title: 'The new China-Russia rail link',
            text: '',
            href: '',
          },
          {
            title: 'Slowly does it',
            text: '',
            href: '',
          },
          {
            title: 'The new economic model',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'Middle East',
        childs: [
          {
            title: 'Saudia Arabia v Iran',
            text: '',
            href: '',
          },
          {
            title: 'The Gulf moment',
            text: '',
            href: '',
          },
          {
            title: 'Israel\'s democratic deficit',
            text: '',
            href: '',
          },
          {
            title: 'Philanthropy\'s impact',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'Africa',
        childs: [
          {
            title: 'The rise of the African middle class',
            text: '',
            href: '',
          },
          {
            title: 'Fake rhino horns',
            text: '',
            href: '',
          },
          {
            title: 'A sub-saharan tour',
            text: '',
            href: '',
          },
          {
            title: 'African democratic renewal',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'International',
        childs: [
          {
            title: 'Roman Catholicism\'s holy year',
            text: '',
            href: '',
          },
          {
            title: 'The Orthodox summit',
            text: '',
            href: '',
          },
          {
            title: 'The power game: big men v smooth',
            text: '',
            href: '',
          },
          {
            title: 'Right and wrong',
            text: '',
            href: '',
          },
          {
            title: 'The future of crime',
            text: '',
            href: '',
          },
        ],
      },
    ],
  },
  {
    title: 'Business & Finance',
    href: '',
    childs: [
      {
        title: 'Business',
        childs: [
          {
            title: 'Follow the corporate cash',
            text: '',
            href: '',
          },
          {
            title: 'Prepare for VR and AR',
            text: '',
            href: '',
          },
          {
            title: 'The onslaugh of tech regulation',
            text: '',
            href: '',
          },
          {
            title: 'A web revolution from below',
            text: '',
            href: '',
          },
          {
            title: 'The rise of the blue economy',
            text: '',
            href: '',
          },
          {
            title: 'The China cost and its consequences',
            text: '',
            href: '',
          },
          {
            title: 'Keeping it in the family?',
            text: '',
            href: '',
          },
          {
            title: 'Business fads of 2016',
            text: '',
            href: '',
          },
          {
            title: 'The corporate scandals of 2016',
            text: '',
            href: '',
          },
          {
            title: 'The anti-drone business',
            text: '',
            href: '',
          },
          {
            title: 'End of an open era for software',
            text: '',
            href: '',
          },
          {
            title: 'Tesla goes mass-market',
            text: '',
            href: '',
          },
          {
            title: 'Ranking the virtuous companies',
            text: '',
            href: '',
          },
          {
            title: 'A matter of trust',
            text: '',
            href: '',
          },
          {
            title: 'In praise of the disrupters',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'Finance and Economics',
        childs: [
          {
            title: 'Wherever next? The direction of global markets',
            text: '',
            href: '',
          },
          {
            title: 'The smart money in 2016',
            text: '',
            href: '',
          },
          {
            title: 'The economist of 2016',
            text: '',
            href: '',
          },
          {
            title: 'India\'s new banks',
            text: '',
            href: '',
          },
          {
            title: 'Fintech\'s coming inroads',
            text: '',
            href: '',
          },
          {
            title: 'City slicker',
            text: '',
            href: '',
          },
          {
            title: 'FDI bounces back',
            text: '',
            href: '',
          },
          {
            title: 'Lessons for 2016',
            text: '',
            href: '',
          },
          {
            title: 'Blockchain and banks',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'The world in numbers',
        childs: [],
      },
    ],
  },
  {
    title: 'Science & Tech',
    href: '',
    childs: [
      {
        title: 'Science and Technology',
        childs: [
          {
            title: 'Prescription for 2016: personal diets',
            text: '',
            href: '',
          },
          {
            title: 'Hello, Jupiter',
            text: '',
            href: '',
          },
          {
            title: 'High Loon',
            text: '',
            href: '',
          },
          {
            title: 'The great plastic clear-up',
            text: '',
            href: '',
          },
          {
            title: 'Where man\'s best friends came from',
            text: '',
            href: '',
          },
          {
            title: 'The war on cancer',
            text: '',
            href: '',
          },
          {
            title: 'The web at 25',
            text: '',
            href: '',
          },
        ],
      },
    ],
  },
  {
    title: 'Culture',
    href: '',
    childs: [
      {
        title: 'Culture',
        childs: [
          {
            title: 'India on display',
            text: '',
            href: '',
          },
          {
            title: 'The Naqba museum opens',
            text: '',
            href: '',
          },
          {
            title: 'All about Goya',
            text: '',
            href: '',
          },
          {
            title: 'Happy birthday, Heronymous',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'Obituary',
        childs: [
          {
            title: 'SAT words',
            text: '',
            href: '',
          },
        ],
      },
    ],
  },
  {
    title: 'Specials',
    href: '',
    childs: [
      {
        title: 'The Predictors',
        childs: [
          {
            title: 'What the superforecasters say',
            text: '',
            href: '',
          },
          {
            title: 'What the polls say',
            text: '',
            href: '',
          },
          {
            title: 'What the astrologers say',
            text: '',
            href: '',
          },
          {
            title: 'Stuart Candy (futurist)',
            text: '',
            href: '',
          },
          {
            title: 'Neri Oxman (architect of the future at MIT Media Labs)',
            text: '',
            href: '',
          },
          {
            title: 'Rory Hyde (curator of exhibition of the future, V&A)',
            text: '',
            href: '',
          },
          {
            title: 'Margaret Atwood (writer)',
            text: '',
            href: '',
          },
          {
            title: 'Faith Popcorn (trends forecaster)',
            text: '',
            href: '',
          },
          {
            title: 'Jeremy Bentham (head of Shell scenarios)',
            text: '',
            href: '',
          },
          {
            title: 'Bill Frey (demographer)',
            text: '',
            href: '',
          },
          {
            title: 'Hal Varian (of Google)',
            text: '',
            href: '',
          },
        ],
      },
      {
        title: 'Archive',
        childs: [],
      },
      {
        title: 'KAL',
        childs: [],
      },
      {
        title: 'Video',
        childs: [],
      },
      {
        title: 'Cartoon',
        childs: [],
      },
    ],
  },
];

const activeCategory = 'World';
const activeSubcategory = 'Britain';
export default (
  <CategoryList
    data={data}
    activeCategory={activeCategory}
    activeSubcategory={activeSubcategory}
  />
);
