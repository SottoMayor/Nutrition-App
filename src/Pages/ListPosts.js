import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from '../Components/Card';

const ListPosts = () => {

    // Receive Data from the local storage!
    // Rendering on demand the saved posts

    return (
        <main>
            <Container style={{'textAlign': 'center', 'marginBottom': '20px'}}>
                <h2>Veja nossos posts!</h2>
            </Container>
            <Card listPosts/>
        </main>
    )
}

export default ListPosts
