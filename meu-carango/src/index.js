import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import HomePage from './pages/HomePage';
import FaleConoscoPage from './pages/FaleConoscoPage';
import SobrePage from './pages/SobrePage';
import VeiculosPage from './pages/VeiculosPage';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/sobre" component={SobrePage} exact />
          <Route path="/contato" component={FaleConoscoPage} exact />
          <Route path="/veiculos" component={VeiculosPage} exact />
        </Switch>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
