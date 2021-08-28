import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MasterLayout from './components/MasterLayout';
import './assets/scss/global.scss';

/* Providers */
import { AuthProvider } from './providers/AuthProvider';

/* Páginas */
import HomePage from './pages/HomePage';
import VeiculosPage from './pages/VeiculosPage';
import AgendamentoPage from './pages/AgendamentoPage';
import HabilitacaoPage from './pages/HabilitacaoPage';
import InfracaoPage from './pages/InfracaoPage';
import EducacaoPage from './pages/EducacaoPage';
import CredenciamentoPage from './pages/CredenciamentoPage';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <BrowserRouter>
          <MasterLayout>
            <Switch>
              <Route component={HomePage} path="/" exact />
              <Route component={VeiculosPage} path="/veiculos" exact />
              <Route component={AgendamentoPage} path="/agendamento" exact />
              <Route component={HabilitacaoPage} path="/habilitacao" exact />
              <Route component={InfracaoPage} path="/infracao" exact />
              <Route component={EducacaoPage} path="/educacao" exact />
              <Route component={CredenciamentoPage} path="/credenciamento" exact />
            </Switch>
          </MasterLayout>
        </BrowserRouter>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
