import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../../hooks"
import { CharactersPage } from "./CharactersPage";


export const PagesInformation = () => {
    const {id} = useParams();
    const {pathname}  = useLocation()
    let page ;
    
    pathname.includes('personajes') ? page = 'personajes' :
    pathname.includes('comics') ? page = 'comics' :
    pathname.includes('series') ? page = 'series' : page = ''


    const navigate = useNavigate()
    const [item, setItem] = useState([])
    const {info , isLoading } = useFetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=c7f464c69d07d97c49da306f506c5130`)

    useEffect(() => {
        setItem(info?.data?.results[0])
    }, [isLoading])
    

    const SelectionOfPage = ({page , item}) =>{
        if(page == 'personajes' ) return <CharactersPage item={ item } />
    }


    return (
        <SelectionOfPage page={page} item={item}/>
        
    )
}
