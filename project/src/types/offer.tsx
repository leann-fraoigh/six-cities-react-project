export type Offer = {
  id: string,
  city: 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf',
  location: {latitude: number, longitude: number},
  img: string,
  isPremium: boolean,
  pricePerNight: number,
  title: string,
  type: 'apartment' | 'room' | 'house' | 'hotel',
  rating: number,
}

export type Offers = Offer[];

