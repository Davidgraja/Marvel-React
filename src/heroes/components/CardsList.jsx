import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { AlertLoading } from './AlertLoading';
import { Cards } from './Cards';

export const CardsList = ({page}) => {
    console.clear()
    const [items, setItems] = useState([])
    const {info , isLoading } = useFetch( `https://gateway.marvel.com:443/v1/public/${page}?apikey=c7f464c69d07d97c49da306f506c5130`);

    useEffect(() => {
        if(!isLoading){
            const {results} = info.data
            setItems(results)
        }   
    }, [info])
    

    return (
        <>
            {
                isLoading ? <AlertLoading/> : <Cards items={items} page={page}/>
            }
            
        </>
    )
}
