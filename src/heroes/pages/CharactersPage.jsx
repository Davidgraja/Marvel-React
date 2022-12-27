import { useNavigate } from "react-router-dom"
import { DescriptionValidation } from "../components"
import { ItemsUl } from "../components/ItemsUl"

export const CharactersPage = ({item}) => {
    const navigate = useNavigate()
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
                    <DescriptionValidation description={item?.description} type={'page'} />
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
