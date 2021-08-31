import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './Components/Pages/Main/Main';
import Layout from './Components/Layout/Layout/Layout';
import Login from './Components/Pages/Login/Login';
import '../src/assets/Styles/styles.css'
import { FormCard } from './Components/Shared/Main/FormCard/FormCard';

function App() {
  return (
    <div className="App">
        <Layout>
        <Switch>
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/register-meal'>
            <FormCard/>
          </Route>
          <Route exact path='user-meals'>

          </Route>
        </Switch>
        </Layout>
    </div>
  );
}

export default App;
