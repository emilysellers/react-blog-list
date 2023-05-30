import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <section className="main">
      <Header />
      {/* add your main component here */}
      <Main />
      <Footer />
    </section>
  );
}

export default App;
