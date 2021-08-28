import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from '../store/index';

const Cards = () => {
    //console.log(posts);
    
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    
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

            dispatch(postsActions.addPosts(data));
        }catch(err){
            setMessage(err.message);
            setError(true);
        }

        setLoading(false);
        
    }, [dispatch])

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

            {!loading && posts.length === 0 && (
                <Alert variant='warning'>
                    <Alert.Heading>Opa! Você não possui postagens cadastradas.</Alert.Heading>
                    <p>
                    Isso aconteceu porque você realmete não possui postagens castradas, ou tivemos problemas para
                    carregar suas postagens!
                    </p>
              </Alert>
            )}

            {
                !error && posts.map( info => <Card {...info} key={info.id}/> )
            }
        </section>
    )
}

export default Cards
