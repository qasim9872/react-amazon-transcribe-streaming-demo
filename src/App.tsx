import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/base/Navbar';
import Footer from './components/base/Footer';
import Home from './views/Home';
import StoreProviders from './store';

function App() {
  return (
    <div className="relative">
      <StoreProviders>
        <Router>
          <Navbar />

          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </StoreProviders>
    </div>
  );
}

export default App;
