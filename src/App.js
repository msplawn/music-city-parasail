import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import TopMenu from './components/Menu/Menu';
import LandingInfo from './components/LandingInfo/LandingInfo';
import BookingForm from './components/BookingForm/BookingForm';

function App() {
  return (
    <div className="App">
      {/* <div className="ui menu">
        <a className="item">LOGO</a>
        <a className="item">Menu</a>
      </div> */}
    <TopMenu />
      {/* <header className="App-header">
        Music City Parasail
      </header> */}
      <LandingInfo />
      <BookingForm />
    </div>
  );
}

export default App;
