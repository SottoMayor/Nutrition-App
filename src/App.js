import React from 'react';
import Layout from './Layout/Layout';
import Button from 'react-bootstrap/Button';


const App = () => {
  return (
    
    <Layout>
      <div>
        <h2>Does this work?</h2>
        <Button variant="success">Primary</Button>
      </div>
    </Layout>
  )
}

export default App;
