import React from 'react';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Container from 'react-bootstrap/Container'

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
        <Route path="/login">
          <Container style={{"marginTop": "30px", 'textAlign': 'center'}}>
            <h2>Dummy Login Page</h2>
            <p>This page is only representational, this does nothing else.</p>
          </Container>
        </Route>
        <Route path="/">
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;
