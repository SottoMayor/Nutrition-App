import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const CardComponent = () => {
    return (
        <Card style={{ 'max-width': '768px', 'width': '100%'}}>
            <Card.Img variant="top" src="https:\/\/sujeitoprogramador.com\/nutriapp\/wp-content\/uploads\/2017\/12\/Screenshot_3-2.jpg" />
            <Card.Body>
                <Card.Title>Refeições proteicas para fazer antes de dormir</Card.Title>
                <Card.Subtitle className="text-muted"><strong>Categoria</strong>: Dieta</Card.Subtitle>
                <Card.Text>
                    O que acontece com nossos músculos quando estamos dormindo Muitas pessoas pensam que o ganho de massa
                    muscular ocorre dentro da academia, quando estamos treinando pesado. O incha\u00e7o do treino e p\u00f3s-treino d\u00e1 a impress\u00e3o que estamos evoluindo, mas isto n\u00e3o passa de...
                </Card.Text>

                <Button variant="primary">Ver post completo</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;
