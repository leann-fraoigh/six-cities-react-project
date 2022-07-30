type Offer = {
  id: string,
  city: 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf',
  img: string,
  isPremium: boolean,
  pricePerNight: number,
  title: string,
  type: 'apartment' | 'room' | 'house' | 'hotel',
  rating: number,
}

export default Offer;
