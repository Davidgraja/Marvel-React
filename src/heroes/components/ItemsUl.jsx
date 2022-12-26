
export const ItemsUl = ({items=[]}) => {
    return (
        items.map(element => <li className="list-group-item" key={ element.name}> {element.name} </li>)
    )
}
