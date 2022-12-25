

export const CardCharacters = ({name , description , thumbnail}) => {
    
    const DescriptionValidation = ({description}) =>{

        return (description) ? <p className="card-text"> {description}</p> : <></>

    }

    const { path , extension } = thumbnail

    const srcImage = `${path}.${extension}`  

    return (
        <>
            <div className="card m-2">
                <img src={ srcImage } className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title"> { name } </h5>
                    <DescriptionValidation  description={ description }/>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
