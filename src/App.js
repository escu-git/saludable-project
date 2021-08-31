import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Main from './Components/Pages/Main/Main';
import '../src/assets/Styles/styles.css'
import Layout from './Components/Layout/Layout/Layout';

function App() {
  return (
    <div className="App">
        <Layout>
        <Switch>
          <Route exact path='/'>
            <Main/>
          </Route>
        </Switch>
        </Layout>
    </div>
  );
}

export default App;
