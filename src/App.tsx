import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import buildAndWrapLayout from './components/app/builders';
import useSiteConfig from './hooks/use-site-config';
import StoreProviders from './store';

const Main: React.FC = () => {
  const siteConfig = useSiteConfig();

  const sections = siteConfig.sections.map(buildAndWrapLayout);

  return <div className="flex-grow">{sections}</div>;
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
