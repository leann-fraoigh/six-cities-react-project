import Offer from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  onHover: (id: Offer['id']) => void;
  onLeave: () => void;
};

function OfferCard(props: OfferCardProps): JSX.Element {
  const {id, img, isPremium, pricePerNight, title, type, rating} = props.offer;
  const onHover = props.onHover;
  const onLeave = props.onLeave;

  return (
    <article key={id} className="cities__card place-card"
      onMouseEnter={() => {
        onHover(id);
      }}
      onMouseLeave={() => {
        onLeave();
      }}
    >
      { isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ''
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{pricePerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
