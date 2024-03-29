import { Offers } from '../types/offer';
export const offers: Offers = [
  {
    id: '101',
    city: 'Amsterdam',
    img: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Mordor.png',
    isPremium: true,
    pricePerNight: 500000,
    title: 'Barad-dûr',
    type: 'house',
    rating: 1,
  },
  {
    id: '102',
    city: 'Amsterdam',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Baggins_residence_%27Bag_End%27_with_party_sign.jpg/1280px-Baggins_residence_%27Bag_End%27_with_party_sign.jpg',
    isPremium: false,
    pricePerNight: 50,
    title: 'Bag End',
    type: 'room',
    rating: 5,
  },
  {
    id: '103',
    city: 'Cologne',
    img: 'https://www.thetolkienforum.com/wiki-asset/?pid=586&d=1590461128&x=1100',
    isPremium: false,
    pricePerNight: 5,
    title: 'The Prancing Pony',
    type: 'hotel',
    rating: 3,
  },
  {
    id: '104',
    city: 'Cologne',
    img: 'https://i.pinimg.com/564x/62/90/9c/62909c26abcdc14953d26d959bf8da3f.jpg',
    isPremium: true,
    pricePerNight: 500,
    title: 'Rivendell Chamber',
    type: 'apartment',
    rating: 5,
  }
];
