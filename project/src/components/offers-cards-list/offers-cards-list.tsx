import Offer from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersCardsListProps = {
  offers: Offer[],
}
function OffersCardsList({offers}: OffersCardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => <OfferCard offer={offer} key={offer.id}/>)}
    </div>
  );
}

export default OffersCardsList;
