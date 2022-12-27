import { useLocation } from 'react-router-dom'
import { CardCharacters , CardSeries_Comics } from '.'

export const Cards = ({ items = [] , page}) => {

    const {pathname} = useLocation()
    

    const ValidationOfCards = ({page}) => {
        if(page == 'characters') return items.map( item => <CardCharacters key={item.id} { ...item } />)
        else return items.map(item => <CardSeries_Comics key={item.id} {...item}  path={ pathname } />)
    }

    return (
        <div className=' div-container-cards'>
            
            <ValidationOfCards  page={ page }/>
            
        </div>
    
    )
}
