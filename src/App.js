import React from 'react';
import Layout from './Layout/Layout';
import Home from './Pages/Home';

import { Route, Switch } from 'react-router';


const App = () => {
  return (
    
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/detalhes/:postId">
          <h1>Post Details</h1>
        </Route>
        <Route path="/postagens-salvas">
          <h1>List Posts</h1>
        </Route>
        <Route path="/">
          <h1>Page not found!</h1>
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;
