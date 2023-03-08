import { Offer, Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersCardsListProps = {
  offers: Offers,
  onInteractionCallback: (id: Offer['id'] | undefined) => void;
}
function OffersCardsList(props: OffersCardsListProps): JSX.Element {
  const {offers, onInteractionCallback} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => <OfferCard offer={offer} key={offer.id} onHover={(id) => {onInteractionCallback(id);}} onLeave={() => {onInteractionCallback(undefined);}}/>)}
    </div>
  );
}

export default OffersCardsList;
