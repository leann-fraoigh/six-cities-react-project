import { OffersBlockType } from '../../const';
import { Offer, Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersCardsListProps = {
  offers: Offers,
  onInteractionCallback?: (id: Offer['id'] | undefined) => void;
  listType?: string;
}
function OffersCardsList(props: OffersCardsListProps): JSX.Element {
  const {offers, onInteractionCallback, listType} = props;

  let listClassName = '';
  let cardClassName = '';

  switch (listType) {
    case OffersBlockType.CITY:
      listClassName = 'cities__places-list';
      cardClassName = 'cities__card';
      break;
    case OffersBlockType.NEAR:
      listClassName = 'near-places__list';
      cardClassName = 'near-places__card';
      break;
  }

  return (
    <div className={`places__list tabs__content ${listClassName ? listClassName : ''}`}>
      {offers.map((offer: Offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onHover={onInteractionCallback ? (id) => {onInteractionCallback(id);} : undefined}
          onLeave={onInteractionCallback ? () => {onInteractionCallback(undefined);} : undefined} className={`${cardClassName ? cardClassName : ''}`}
        />))}
    </div>
  );
}

export default OffersCardsList;
