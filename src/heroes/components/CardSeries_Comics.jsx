import { Link } from "react-router-dom"
import { DescriptionValidation } from "./"

export const CardSeries_Comics = ({title , description , thumbnail  , id , path}) => {

    return (
        <>
            <div className="card m-2">
                <img src={`${ thumbnail.path }.${ thumbnail.extension }`} className="card-img-top" alt=''/>
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    <DescriptionValidation description={description} type={'card'}/>
                    <Link to={ `${path}/${id}` } className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </>
    )
}
