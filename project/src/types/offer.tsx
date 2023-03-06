export type Offer = {
  id: string,
  city: 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf',
  coords: {lat: number, lng: number},
  img: string,
  isPremium: boolean,
  pricePerNight: number,
  title: string,
  type: 'apartment' | 'room' | 'house' | 'hotel',
  rating: number,
}

export type Offers = Offer[];

