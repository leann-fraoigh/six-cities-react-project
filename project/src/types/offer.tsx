type Offer = {
  id: number,
  img: string,
  isPremium: boolean,
  pricePerNight: number,
  title: string,
  type: 'apartment' | 'room' | 'house' | 'hotel',
  rating: number,
}

export default Offer;
