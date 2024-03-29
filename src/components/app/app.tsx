import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen.tsx';
import MyListScreen from '../../pages/my-list-screen/my-list-screen.tsx';
import MovieScreen from '../../pages/movie-screen/movie-screen.tsx';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen.tsx';
import PlayerScreen from '../../pages/player-screen/player-screen.tsx';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {Films} from '../../types/film.ts';

type AppProps = {
  films: Films;
}

export default function App({films}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainScreen films={films}/>
        }
        />
        <Route path={AppRoute.SignIn} element={<SignInScreen />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListScreen films={films}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Films} element={<MovieScreen films={films}/>} />
        <Route path={AppRoute.AddReview} element={<AddReviewScreen films={films}/>} />
        <Route path={AppRoute.Player} element={<PlayerScreen films={films}/>} />
        <Route path="*" element={<PageNotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
