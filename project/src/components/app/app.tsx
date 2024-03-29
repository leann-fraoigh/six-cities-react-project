import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offers } from '../../types/offer';

type AppProps = {
  offers: Offers
}

function App(props: AppProps): JSX.Element {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen offers={offers}/>} />
        <Route path={AppRoute.Login} element={<LoginScreen/>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesScreen offers={offers}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Room} element={<PropertyScreen offers={offers}/>} />
        <Route path='*' element={<NotFoundScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
