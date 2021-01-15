import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProviders from './store';

const Main: React.FC = () => {
  return <div className="flex flex-grow bg-red-100">hello</div>;
};

function App() {
  return (
    <div className="flex mx-auto min-w-0 h-screen">
      <StoreProviders>
        <Router>
          <Switch>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
      </StoreProviders>
    </div>
  );
}

export default App;
