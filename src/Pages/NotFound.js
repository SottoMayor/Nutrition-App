import React from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router';

const NotFound = () => {

    const history = useHistory();

    return (
        <Container className="d-flex justify-content-center">
            <Alert variant="danger">
                <Alert.Heading>Ooooh ooouh! Página não encontrada.</Alert.Heading>
                <p>
                    Infelizmente não encontramos a página de URL <strong>{`localhost:3000${history.location.pathname} `}</strong> 
                    que você pesquisou! Esse caminho de URL está correto mesmo? De qualquer maneira, aproveite para navegar pela
                    plataforma usando a navegação da aplicação, de forma simples e fácil.
                </p>
                <hr />
                <p className="mb-0">
                    Volte a acessar a plataforma usando a navegação no topo da tela ou digite novamente a URL da página.
                </p>
            </Alert>
        </Container>
    )
}

export default NotFound
