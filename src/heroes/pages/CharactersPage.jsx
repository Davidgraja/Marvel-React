import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../../hooks"
import { ItemsUl } from "../components/ItemsUl";


export const CharactersPage = () => {
    const location = useParams();
    const navigate = useNavigate()
    const [item, setItem] = useState([])
    const {info , isLoading } = useFetch(`https://gateway.marvel.com:443/v1/public/characters/${location.id}?apikey=c7f464c69d07d97c49da306f506c5130`)

    useEffect(() => {
        setItem(info?.data?.results[0])
    }, [isLoading])
    

    const DescriptionValidation = ({description}) =>{

        return (description) ? <li className="list-group-item"> <b>Description : </b>{ description }</li> : <></>
    
    }
    
    
    
    return (
        <div className="row mt-5">
            <div className="col-4 ">
                <img src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} alt={item?.name} className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>

            <div className="col-8">
                <button className="btn btn-outline-primary" onClick={()=> navigate(-1)}>
                    Regresar
                </button>
                <h3>{item?.name}</h3>
                <ul className="list-group list-group-flush">
                    <DescriptionValidation description={item?.description} />
                </ul>
                <h5 className="mt-3"> Comics </h5>
                <ul className="list-group list-group-flush">
                    <ItemsUl items={item?.comics?.items} />
                </ul>

                <h5 className="mt-3"> Series </h5>
                <ul className="list-group list-group-flush">
                    <ItemsUl items={item?.series?.items} />
                </ul>

                <h5 className="mt-3"> Stories </h5>
                <ul className="list-group list-group-flush">
                    <ItemsUl items={item?.stories?.items} />
                </ul>
            </div>
        </div>
    )
}
