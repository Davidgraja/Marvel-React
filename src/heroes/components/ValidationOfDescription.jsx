
export const DescriptionValidation = ({description, type }) =>{
    if(type == 'card') return (description) ? <p className="card-text"> {description}</p> : <></>
    else return (description) ? <li className="list-group-item"> <b>Description : </b>{ description }</li> : <></>
}

