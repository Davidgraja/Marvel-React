import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks"
import { CharactersPage , ComicsPage, SeriesPage } from "./";


export const PagesInformation = () => {
    const {pathname}  = useLocation()
    let page ;
    
    pathname.includes('characters') ? page = 'characters' :
    pathname.includes('comics') ? page = 'comics' :
    pathname.includes('series') ? page = 'series' : page = ''

    const [item, setItem] = useState([])
    const {info , isLoading } = useFetch(`https://gateway.marvel.com:443/v1/public${pathname}?apikey=c7f464c69d07d97c49da306f506c5130`)

    useEffect(() => {
        setItem(info?.data?.results[0])
    }, [isLoading])
    

    const SelectionOfPage = ({page , item}) =>{
        if(page == 'characters' ) return <CharactersPage item={ item } />
        else if(page == 'comics')  return <ComicsPage item={ item } page={page} />
        else  return <SeriesPage item={ item } page={page} />
    }


    return (
        <SelectionOfPage page={page} item={item}/>
    )
}
