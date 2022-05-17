// You don't need to look at this, but you can if you want!
//
// In this modele, we use some functions like Math.random(),
// Math.floor(), and Array.from() to generate some fake data.
// When building user interfaces, it can be helpful to
// mock out simplified versions of the data that our code
// will eventually fetch from backend servers
const getRandomId = () => `${Math.random()}-${Math.random()}`;

const getRandomNumber = (min, range) =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

const summaries = [
  'Rainy',
  'Cloudy',
  'Partly Cloudy',
  'Partly Sunny',
  'Mostly Sunny',
  'Sunny',
];

const randomFromList = list => list[getRandomNumber(0, list.length)];

const getTemp = () => {
  const avg = getRandomNumber(60, 30);

  return {
    avg,
    min: avg - 10,
    max: avg + 10,
  };
};

const getWeatherItem = () => ({
  id: getRandomId(),
  summary: randomFromList(summaries),
  temp: getTemp(),
  precip: getRandomNumber(0, 100),
});

const names = [
  'Anita',
  'Anima',
  'Asa',
  'Asha',
  'Azami',
  'Laila',
  'Haris',
  'Talia',
  'Noor',
  'Malik',
  'Basia',
  'Arya',
  'Duska',
  'Idris',
  'Kala',
  'Kamal',
  'Baz',
  'Ken',
  'Evander',
  'Kim',
  'Lina',
  'Lulu',
  'Caris',
  'Nia',
  'Paz',
  'Raisa',
  'Samir',
  'Zahara',
];

// source for names: https://www.mother.ly/life/28-baby-names-that-bridge-cultures-arya-to-zahara

const getNewsItem = () => ({
  id: getRandomId(),
  title: 'Title Placeholder',
  message: 'Message about item in the news feed (placeholder)',
  imgSrc:
    'https://via.placeholder.com/300x100.png?text=News+Feed+Image+Placeholder',
});

const getFriend = () => ({
  id: getRandomId(),
  name: randomFromList(names),
  isOnline: Math.random() < 0.5,
});

export default {
  '/daily': Array.from({ length: 5 }, getWeatherItem),
  '/hourly': Array.from({ length: 24 }, getWeatherItem),
  '/categories': ['Shirts', 'Pants', 'Shoes', 'Accessories'],
  '/items?category=Shirts': ['T-Shirts', 'Casual', 'Formal'],
  '/items?category=Pants': ['Long Pants', 'Sweat Pants', 'Shorts', 'Swimwear'],
  '/items?category=Shoes': ['Athletic', 'Professional', 'Casual', 'Walking'],
  '/items?category=Accessories': ['Hats', 'Wallets', 'Belts'],
  '/menu': ['Home', 'Profile', 'Events', 'Clubs'],
  '/news-feed': Array.from({ length: 5 }, getNewsItem),
  '/friends': Array.from({ length: 12 }, getFriend),
};
