import React from 'react';
import './assets/css/App.css';
import ComponentTypeHouse from './components/ComponentTypeHouse';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <section className="componentes">
          <ComponentTypeHouse/>
        </section>
      <Footer/>
    </div>
  );
}

export default App;
