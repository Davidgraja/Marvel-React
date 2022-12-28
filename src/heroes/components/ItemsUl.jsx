
export const ItemsUl = ({items=[]}) => {
    
    return (
        items.map(element => <li className="list-group-item" key={setTimeout(()=> new Date().getMilliseconds(),10) }> {element.name} </li>)
    )
}
