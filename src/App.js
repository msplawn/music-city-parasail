import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import TopMenu from './components/Menu/Menu';
import LandingInfo from './components/LandingInfo/LandingInfo';
import BookingForm from './components/BookingForm/BookingForm';
import ParasailLanding from './components/ParasailLanding/ParasailLanding';
import JetskiLanding from './components/JetskiLanding/JetskiLanding';
import BoldText from './components/Bold-Text/Bold-Text';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <LandingInfo />
      <BoldText />
      <ParasailLanding />
      <BoldText />
      <JetskiLanding />
      <BookingForm />
    </div>
  );
}

export default App;
