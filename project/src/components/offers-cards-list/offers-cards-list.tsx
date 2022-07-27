import { useState } from 'react';
import Offer from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersCardsListProps = {
  offers: Offer[],
}
function OffersCardsList({offers}: OffersCardsListProps): JSX.Element {
  const setActiveCard = useState<number | null>(null)[1];

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => <OfferCard offer={offer} key={offer.id} onHover={(id) => {setActiveCard(id);}} onLeave={() => {setActiveCard(null);}}/>)}
    </div>
  );
}

export default OffersCardsList;
