import { DescriptionValidation } from "./"

export const CardSeries_Comics = ({title , description , thumbnail}) => {

    return (
        <>
            <div className="card m-2">
                <img src={`${ thumbnail.path }.${ thumbnail.extension }`} className="card-img-top" alt=''/>
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    <DescriptionValidation description={description}/>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
