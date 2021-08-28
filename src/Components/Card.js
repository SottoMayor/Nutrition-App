import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const CardComponent = (props) => {

    const moreDetailsHandler = () => {
        console.log('Capture de ID here! ', props.id)
    }

    const deletePostHandler = () => {
        console.log('Delete Post from the localStorage!')
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

                {!props.listPosts && <Button variant='warning' className="text-white" onClick={moreDetailsHandler}>Ver post completo</Button>}

                {props.listPosts && <Button variant='danger' className="text-white" onClick={deletePostHandler}>Deletar post</Button>}
            </Card.Body>
        </Card>
    )
}

export default CardComponent;
