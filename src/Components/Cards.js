import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import Spinner from 'react-bootstrap/Spinner'

const Cards = () => {

    const [ infos, setInfos ] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchData = useCallback( async () => {
        setLoading(true);
        try{
            const response = await fetch('https://sujeitoprogramador.com/rn-api/?api=posts/');
            const data = await response.json();

            if(!response.ok){
                throw new Error('Something went wrong!')
            }
            setInfos(data);
        }catch(err){
            // make the error handling
            console.log(err.message);
        }

        setLoading(false);
        
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            {loading && <Spinner animation="border" role="status"/>}

            {
                infos.map( info => <Card {...info} key={info.id}/> )
            }
        </section>
    )
}

export default Cards
