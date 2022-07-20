import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen placesCounter={666}/>} />
        <Route path={AppRoute.Login} element={<LoginScreen/>} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <FavoritesScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Room} element={<PropertyScreen/>} />
        <Route path='*' element={<NotFoundScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
