import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './components/app/base/SideNav/index';
import StoreProviders from './store';
import useSiteConfig from './hooks/use-site-config';
import { buildAndWrapLayout } from './components/app/builders/index';

const Main: React.FC = () => {
  const siteConfig = useSiteConfig();

  const sections = siteConfig.sections.map(buildAndWrapLayout);

  return <div className="flex-grow">{sections}</div>;
};

function App() {
  return (
    <div className="mx-auto min-w-0">
      <StoreProviders>
        <Router>
          <div className="flex">
            <SideNav />
            <div className="ml-72">
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
