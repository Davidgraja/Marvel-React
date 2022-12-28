import { Link } from "react-router-dom"
import { DescriptionValidation } from "./"


export const CardCharacters = ({name , description , thumbnail , id , page}) => {
    
    const { path , extension } = thumbnail

    const srcImage = `${path}.${extension}`  

    return (
        <>
            <div className="card m-2">
                <img src={ srcImage } className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title"> { name } </h5>
                    <DescriptionValidation  description={ description }/>
                    <Link to={`/info/${id}?page=${page}`} className="btn btn-primary">Mas..</Link>
                </div>
            </div>
        </>
    )
}
