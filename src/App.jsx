import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import DataContext from './context/DataContext';
import { Main } from './App.style';
import NavBar from './components/navbar/NavBar';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';

const Home = lazy(() => import('./views/home/Home'));
const Genres = lazy(() => import('./views/genres/Genres'));
const MediaView = lazy(() => import('./views/mediaview/MediaView'));
const IndividualCard = lazy(() => import('./views/individualcard/IndividualCard'));
const PersonView = lazy(() => import('./views/personview/PersonView'));
const NotFound = lazy(() => import('./views/notfound/NotFound'))

const App = () => {

  const info = {
    movies: useFetch([3, 'trending', 'movie', 'week']),
    series: useFetch([3, 'trending', 'tv', 'week'])
  };

  return (
    <Router>
      <NavBar />
      <Main>
        <ErrorBoundary>
          <Suspense fallback={<div className="loading-message">Loading...</div>}>
            <DataContext.Provider value={info}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:media" component={Genres} />
                <Route exact path="/:media/:mediagenres/:query?/page/:numberPage" component={MediaView} />
                <Route exact path="/person/:id/:section" component={PersonView} />
                <Route exact path="/:media/:id/:section/:seasonNumber?" component={IndividualCard} />
                <Route component={NotFound} />
              </Switch>
            </DataContext.Provider>
          </Suspense>
        </ErrorBoundary>
      </Main>
    </Router>
  );
}

export default App;