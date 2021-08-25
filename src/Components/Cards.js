import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';

const Cards = () => {

    const [ infos, setInfos ] = useState([]);

    const fetchData = useCallback( async () => {
        const response = await fetch('https://sujeitoprogramador.com/rn-api/?api=posts/');
        const data = await response.json();
        setInfos(data);
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {
                infos.map( info => <Card {...info} key={info.id}/> )
            }
        </section>
    )
}

export default Cards
