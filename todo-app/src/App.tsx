import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './app-routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';


const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;
