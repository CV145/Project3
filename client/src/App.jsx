import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import Locations from './pages/Locations';
import LocationEvents from './pages/LocationEvents';  // Assuming this component handles showing events for a specific location
import './App.css';

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/pdnb-gallery',
      element: <LocationEvents index={1} locationName="PDNB Gallery" />
    },
    {
      path: '/northpark-center',
      element: <LocationEvents index={2} locationName="NorthPark Center" />
    },
    {
      path: '/the-hill-shopping-center',
      element: <LocationEvents index={3} locationName="The Hill Shopping Center" />
    },
    {
      path: '/hotel-swexan',
      element: <LocationEvents index={4} locationName="Hôtel Swexan" />
    },
    {
      path: '/deep-ellum-community-center',
      element: <LocationEvents index={5} locationName="Deep Ellum Community Center" />
    },
    {
      path: '/the-exchange-hall',
      element: <LocationEvents index={6} locationName="The Exchange Hall" />
    }
  ]);

  return (
    <div className='app'>
      <header className='main-header'>
        <h1>Dallas Plaza</h1>
        <nav>
          <Link to="/" className="home-button">Home</Link>
        </nav>
      </header>

      <main>
        {element}
      </main>
    </div>
  );
};

export default App;
