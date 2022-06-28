import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <>
    <Router>
    <Header/>

    <Switch>

      <Route exact path='/' component={Home} />
          
    </Switch>

    <Footer />
    </Router>
    </>
  )
}

export default App; 