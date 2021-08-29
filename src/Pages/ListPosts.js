import React, { useEffect, useState, useCallback } from 'react'
import Container from 'react-bootstrap/Container'
import Card from '../Components/Card';
import Alert from 'react-bootstrap/Alert'

const ListPosts = () => {

    const [posts, setPosts] = useState([]);
    
    const localStorageWorker = useCallback( () => {
        const getSavedPosts = localStorage.getItem('posts');
        const savedPosts = JSON.parse(getSavedPosts);
        setPosts(savedPosts);
    }, []);

    const deletePostHandler = (postId) => {
        const getSavedPosts = localStorage.getItem('posts');
        const savedPosts = JSON.parse(getSavedPosts);
        const filterSavedPosts = savedPosts.filter(post => post.id !== postId);
        
        localStorage.setItem('posts', JSON.stringify(filterSavedPosts));
        
        setPosts(filterSavedPosts);
    }

    useEffect(() => {
        localStorageWorker()
    }, [localStorageWorker])
    
    return (
        <main>
            <Container style={{'textAlign': 'center', 'marginBottom': '20px'}}>
                <h2>Essas são suas publicações salvas!</h2>
            </Container>
            <section className="d-flex justify-content-center align-items-center flex-column">
                {
                    posts.length > 0 && posts.map(post => <Card onDeletePost={deletePostHandler} listPosts {...post} key={post.id}/>)
                }

                {
                    posts.length === 0 && (
                        <Alert variant='warning'>
                            <Alert.Heading>Opa! Você não possui postagens salvas.</Alert.Heading>
                            <p>
                                Isso aconteceu porque você não possui postagens salvas, recomendamos que
                                você vá até a página Home e salve algumas postagens do seu interesse para ler depois. 
                            </p>
                        </Alert>
                    )
                }
            </section>

        </main>
    )
}

export default ListPosts
