import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const PostDetails = (props) => {

    const savePostHandler = () => {
        console.log('Save this post in local storage');
    }

    return(
        <section style={{textAlign: 'center'}}>
            <h2 style={{ marginBottom: '20px'}}>Mais detalhes da publicação</h2>

            <Row style={{'marginTop': '7%'}}>
                <Col>
                    <figure className="d-flex justify-content-center">
                        <img style={{'maxWidth': '500px', 'maxHeight': '500px'}} src='https:\/\/sujeitoprogramador.com\/nutriapp\/wp-content\/uploads\/2017\/12\/Screenshot_3-2.jpg' alt='Refei\u00e7\u00f5es proteicas para fazer antes de dormir'/>
                    </figure>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h4>
                                        Refei\u00e7\u00f5es proteicas para fazer antes de dormir
                                    </h4>
                               </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="text-muted">
                                        <strong>Categoria</strong>: Dieta
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p style={{'textAlign': 'justify'}}>
                                        O que acontece com nossos m\u00fasculos quando estamos dormindo 
                                        Muitas pessoas pensam que o ganho de massa muscular ocorre dentro 
                                        da academia, quando estamos treinando pesado. O incha\u00e7o do 
                                        treino e p\u00f3s-treino d\u00e1 a impress\u00e3o que estamos 
                                        evoluindo, mas isto n\u00e3o passa de...
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

            {/* <Row>
                <Col>
                    <figure>
                        <img src={props.capa} alt={props.titulo}/>
                    </figure>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <Col>{props.titulo} aaaa</Col>
                            </Row>
                            <Row>
                                <Col>{props.categoria} aaaaaaaaa</Col>
                            </Row>
                            <Row>
                                <Col>{props.subtitulo} aaa</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Salvar Publicação</Accordion.Header>
                                    <Accordion.Body style={{backgroundColor: '#a2d2ff'}}>
                                        Gostou da publicação? Aperte em favoritar, botão abaixo, para consultar quantas vezes desejar!
                                    </Accordion.Body>
                                    <Accordion.Body style={{backgroundColor: '#a2d2ff'}}>
                                        <Button variant="warning" className="text-white">Favoritar</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Col>
            </Row> */}
        </section>
    )
}

export default PostDetails