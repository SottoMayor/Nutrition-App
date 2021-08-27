import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

const Cards = () => {

    const [infos, setInfos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const fetchData = useCallback( async () => {
        setError(false);
        setLoading(true);
        try{
            const response = await fetch('https://sujeitoprogramador.com/rn-api/?api=posts/');
            if(!response.ok){
                throw new Error('Algo deu errado! Tente novamente.')
            }

            const data = await response.json();

            setInfos(data);
        }catch(err){
            setMessage(err.message);
            setError(true);
        }

        setLoading(false);
        
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            {loading && <Spinner animation="border" role="status"/>}

            {error && (
                <Modal show={error} onHide={() => setError(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>Ocorreu um ERRO!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><strong>Causa</strong>: {message}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={() => setError(false)}>
                        Entendido
                    </Button>
                    </Modal.Footer>
                </Modal>
            )}

            {!loading && infos.length === 0 && (
                <Alert variant='warning'>
                    <Alert.Heading>Opa! Você não possui postagens cadastradas.</Alert.Heading>
                    <p>
                    Isso aconteceu porque você realmete não possui postagens castradas, ou tivemos problemas para
                    carregar suas postagens!
                    </p>
              </Alert>
            )}

            {
                !error && infos.map( info => <Card {...info} key={info.id}/> )
            }
        </section>
    )
}

export default Cards
