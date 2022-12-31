import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { AlertLoading } from './AlertLoading';
import { Cards } from './Cards';

export const CardsList = ({page}) => {
    
    const [items, setItems] = useState([]);
    const {info , isLoading , hasError } = useFetch( `https://gateway.marvel.com:443/v1/public/${page}?apikey=c7f464c69d07d97c49da306f506c5130`);

    useEffect(() => {
        if(!isLoading){
            const {results} = info.data
            setItems(results)
        }   
    }, [info])
    

    return (
        <>
            {
                // hasError ? <Navigate to={`/error/${hasError}`} /> 
                hasError ? <AlertLoading color={'danger'} message={`lo sentimos a ocurrido un errror  de tipo : ${hasError} , por favor verifique su conexion a internet o informacion enviada`}/> :
                isLoading ? <AlertLoading color={'primary'} message={'Cargando la informacion'}/> : <Cards items={items} page={page}/>
            }
            
        </>
    )
}
