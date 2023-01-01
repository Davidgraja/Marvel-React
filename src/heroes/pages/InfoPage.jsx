import { useLocation, useParams } from "react-router-dom"
import queryString from 'query-string';
import { useFetch } from "../../hooks";
import { ComicsPage , CharactersPage , SeriesPage } from "./";
import { AlertLoading } from "../components";

export const InfoPage = () => {
    const location = useLocation()
    const parameters = useParams()

    const {id} = parameters
    const {page} = queryString.parse(location.search)

    
    const {info , hasError} = useFetch(`https://gateway.marvel.com:443/v1/public/${page}/${id}?apikey=c7f464c69d07d97c49da306f506c5130`)
    
    const SelectionOfPage = ({item}) =>{
        if(page == 'characters' ) return <CharactersPage item={ item } />
        else if(page == 'comics')  return <ComicsPage item={ item } page={page} />
        else  return <SeriesPage item={ item } />
    }
    return (
        hasError ? <AlertLoading color={'danger'} message={`Lo sentimos a ocurrido un error`}/> : 
        info ? <SelectionOfPage item={info.data.results[0]} />  : <></>
    )
}
