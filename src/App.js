import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './Components/Pages/Main/Main';
import Layout from './Components/Layout/Layout/Layout';
import Login from './Components/Pages/Login/Login';
import '../src/assets/Styles/styles.css'
import FormCardContainer from './Components/Pages/FormCard/FormCardContainer';
import {MealLoggerProvider} from './Contexts/mealLogContext';
import MealsLog from './Components/Pages/MealsLog.jsx/MealsLog';
import { AuthProvider } from './Contexts/AuthContext';
import SignUp from './Components/Pages/Login/SignUp';
function App() {
  return (
    <div className="App">
    <AuthProvider>
    <MealLoggerProvider>
        <Layout>
        <Switch>
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route exact path='/signup'>
            <SignUp/>
          </Route>
          <Route exact path='/signin'>
            <Login/>
          </Route>
          <Route exact path='/register-meal'>
            <FormCardContainer/>
          </Route>
          <Route exact path='meals-log'>
            <MealsLog/>
          </Route>
        </Switch>
        </Layout>
    </MealLoggerProvider>
    </AuthProvider>
    </div>
  );
}

export default App;
