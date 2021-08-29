import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardComponent = (props) => {

    const deletePostHandler = () => {
        props.onDeletePost(props.id);
    }

    return (
        <Card style={{ 'maxWidth': '768px', 'width': '100%', 'marginBottom': '2%'}}>
            <Card.Img variant="top" src={props.capa} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Subtitle className="text-muted"><strong>Categoria</strong>: {props.categoria}</Card.Subtitle>
                <Card.Text>
                    {props.subtitulo}
                </Card.Text>

                {!props.listPosts && <Button as={Link} to={`/detalhes/${props.id}`} variant='warning' className="text-white">Ver post completo</Button>}

                {props.listPosts && <Button variant='danger' className="text-white" onClick={deletePostHandler}>Deletar post</Button>}
            </Card.Body>
        </Card>
    )
}

export default CardComponent;
