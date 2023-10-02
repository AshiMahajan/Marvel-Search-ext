import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Time from "./Time";
import Searchbar from './Searchbar';


function App() {
  return (
    <div className="relative w-full h-full m-0 p-0 overflow-hidden bg-no-repeat bg-cover bg-center" id="app">
      <Navbar />
      <Time />
      <Searchbar/>
    </div>
  );
}

export default App;