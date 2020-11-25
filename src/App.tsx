import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/base/Navbar';
import Footer from './components/base/Footer';
import Home from './views/Home';

function App() {
  return (
    <div className="relative">
      <Router>
        <Navbar />

        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
