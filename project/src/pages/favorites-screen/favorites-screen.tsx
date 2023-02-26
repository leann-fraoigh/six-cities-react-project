import { Offer, Offers } from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type FavoritesScreenProps = {
  offers: Offers;
};

type OffersSorted = {[city: string]: Offer[]};

function FavoritesScreen(props: FavoritesScreenProps): JSX.Element {
  const {offers} = props;

  // Сортируем в словарик
  const offersSorted: OffersSorted = {};
  offers.forEach((offer: Offer) => {
    const currentCity = offer.city;
    if (!Object.prototype.hasOwnProperty.call(offersSorted, currentCity)) {
      offersSorted[currentCity] = [];
    }
    offersSorted[currentCity].push(offer);
  });

  // Объявляем массив городов с избранными предложениями
  const offersGrouppedByPlace: JSX.Element[] = [];

  for (const placeWithFavorites in offersSorted) {
    if (Object.prototype.hasOwnProperty.call(offersSorted, placeWithFavorites)) {
      // Собираем массив городов с избранными предложениями
      offersGrouppedByPlace.push(
        (
          <li className="favorites__locations-items" key={placeWithFavorites}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{placeWithFavorites}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {/* Рендерим список предложений в городе */}
              {offersSorted[placeWithFavorites].map((currentOffer, i: number) => (
                <OfferCard offer={currentOffer} key={currentOffer.id}/>
              ))}
            </div>
          </li>
        ));
    }
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {offersGrouppedByPlace.map((offersInThePlace: JSX.Element, i: number) => (
                offersInThePlace
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
