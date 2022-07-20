import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import { AppRoute } from '../../const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen placesCounter={666}/>} />
        <Route path={AppRoute.Login} element={<LoginScreen/>} />
        <Route path={AppRoute.Favorites} element={<FavoritesScreen/>} />
        <Route path={AppRoute.Room} element={<PropertyScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
