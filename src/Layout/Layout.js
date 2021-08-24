import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    return (
        <Fragment>
            <Header/>

            <Container style={{'minHeight': '85vh', paddingTop: '15px', paddingBottom: '15px'}}>
                {props.children}
            </Container>
            
            <Footer/>
        </Fragment>
    )
}

export default Layout
