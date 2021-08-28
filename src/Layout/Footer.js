import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#ffc8dd', paddingTop: '5px', paddingBottom: '5px'}}>
            <Container className="d-flex justify-content-between align-items-center">

                <p>Qualidade em nutrição 💪👊</p>

                <h3>React App</h3>

            </Container>
        </footer>
    )
}

export default Footer
