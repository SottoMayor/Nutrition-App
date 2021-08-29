import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const PostDetails = () => {

    const posts = useSelector(state => state.posts);
    const history = useHistory();
    const { postId } = useParams();

    const [loadedPost, setLoadedPost] = useState({});
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setError(false)
        const foundPost = posts.find(post => post.id.toString() === postId.toString());
        if(!foundPost) {
            history.replace('/');
        }

        setLoadedPost(foundPost);
    }, [posts, history, postId]);

    const savePostHandler = () => {
        const getPosts = localStorage.getItem('posts');
        const savedPosts = JSON.parse(getPosts) || [];

        const foundPost = savedPosts.find(post => post.id.toString() === postId.toString());
        if(!foundPost){
            savedPosts.push(loadedPost);
            localStorage.setItem('posts', JSON.stringify(savedPosts));

            setMessage(`O post foi adicionado aos seus favoritos!`);
            setShow(true);
            setError(false);
            return;
        }
        setMessage(`O post  já está na sua lista de favoritos!`);
        setError(true);
        setShow(true);
    }

    return(
        <section style={{textAlign: 'center'}}>
            <h2 style={{ marginBottom: '20px'}}>Mais detalhes da publicação</h2>

            {show && (
                <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>{error ? 'Ocorreu um ERRO!' : 'Tudo CERTO!'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{message}</Modal.Body>
                    <Modal.Footer>
                    <Button variant={error ? 'danger' : 'success'} onClick={() => setShow(false)}>
                        Entendido
                    </Button>
                    </Modal.Footer>
                </Modal>
            )}

            <Row style={{'marginTop': '7%'}}>
                <Col>
                    <figure className="d-flex justify-content-center">
                        <img style={{'maxWidth': '500px', 'maxHeight': '500px'}} src={loadedPost.capa} alt={loadedPost.titulo}/>
                    </figure>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h4>
                                        {loadedPost.titulo}
                                    </h4>
                               </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="text-muted">
                                        <strong>Categoria</strong>: {loadedPost.categoria}
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p style={{'textAlign': 'justify'}}>
                                        {loadedPost.subtitulo}
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{'marginBottom': '20px'}}>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Salvar Publicação</Accordion.Header>
                                    <Accordion.Body style={{backgroundColor: '#a2d2ff'}}>
                                        Gostou da publicação? Aperte em favoritar, botão abaixo, para consultar quantas vezes desejar!
                                    </Accordion.Body>
                                    <Accordion.Body style={{backgroundColor: '#a2d2ff'}}>
                                        <Button onClick={savePostHandler} variant="warning" className="text-white">Favoritar</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </section>
    )
}

export default PostDetails