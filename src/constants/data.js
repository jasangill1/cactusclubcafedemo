import images from './images';

const spirits = [
  {
    title: 'Johnnie Walker Black Label',
    price: '$80',
    tags: 'UK | 750 ml',
  },
  {
    title: 'Macallan 12 Year Old',
    price: '$110',
    tags: 'UK | 750 ml',
  },
  {
    title: 'Grey Goose Vodka',
    price: '$70',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Hendrick\'s Gin',
    price: '$85',
    tags: 'UK | 750 ml',
  },
  {
    title: 'Patrón Silver Tequila',
    price: '$95',
    tags: 'MX | 750 ml',
  },
];

const beers = [
  {
    title: 'Stella Artois',
    price: '$8',
    tags: 'BE | 330 ml',
  },
  {
    title: 'Heineken',
    price: '$7',
    tags: 'NL | 330 ml',
  },
  {
    title: 'Budweiser',
    price: '$6',
    tags: 'US | 330 ml',
  },
  {
    title: 'Guinness',
    price: '$8',
    tags: 'IE | 440 ml',
  },
  {
    title: 'Corona Extra',
    price: '$7',
    tags: 'MX | 330 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { beers, spirits, awards };
