import { CardCharacters , CardSeries_Comics } from './'

export const Card = ({ items = [] , page}) => {

    const ValidationOfCards = ({page}) => {
        if(page == 'characters') return items.map( item => <CardCharacters key={item.id} { ...item } />)
        else return items.map(item => <CardSeries_Comics key={item.id} {...item} />)
    }

    return (
        <div className=' div-container-cards'>
            
            <ValidationOfCards  page={ page }/>
            
        </div>
    
    )
}
