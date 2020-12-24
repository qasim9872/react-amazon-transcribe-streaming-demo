import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './components/base/SideNav/index';
import Main from './sections/Main';
import StoreProviders from './store';

function App() {
  return (
    <div className="max-w-6xl mx-auto min-w-0">
      <StoreProviders>
        <Router>
          <div className="flex">
            <SideNav />
            <div className="ml-64">
              <Switch>
                <Route path="/">
                  <Main />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </StoreProviders>
    </div>
  );
}

export default App;
