import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const PostDetails = () => {

    const posts = useSelector(state => state.posts);
    const history = useHistory();
    const { postId } = useParams();

    const [loadedPost, setLoadedPost] = useState({})

    useEffect(() => {
        const foundPost = posts.find(post => post.id.toString() === postId.toString());
        if(!foundPost) {
            history.replace('/');
        }
        console.log(foundPost);
        setLoadedPost(foundPost);
    }, [posts, history, postId]);

    const savePostHandler = () => {
        console.log('Save this post in local storage');
    }

    return(
        <section style={{textAlign: 'center'}}>
            <h2 style={{ marginBottom: '20px'}}>Mais detalhes da publicação</h2>

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