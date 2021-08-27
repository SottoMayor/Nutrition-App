import React from 'react'
import Cards from '../Components/Cards';
import Container from 'react-bootstrap/Container'

const Home = () => {
    return (
        <main>
            <Container style={{'textAlign': 'center', 'marginBottom': '20px'}}>
                <h2>Veja nossos posts!</h2>
            </Container>
            <Cards/>
        </main>
    )
}

export default Home
