import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './components/base/SideNav/index';
import Home from './views/Home';
import StoreProviders from './store';

const WrapHomeRoute: React.FC = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <div className="max-w-6xl mx-auto min-w-0">
      <StoreProviders>
        <Router>
          <div className="flex">
            <SideNav />
            <WrapHomeRoute />
          </div>
        </Router>
      </StoreProviders>
    </div>
  );
}

export default App;
