import { useParams } from "react-router-dom"

export const ComicsYSeriesPage = () => {

    const {id} = useParams()
    // const {info , isLoading } = useFetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=c7f464c69d07d97c49da306f506c5130`)
    

    return (
        <div>ComicsYSeriesPage</div>
    )
}
