import { Navigate, Route , Routes } from 'react-router-dom';
import { Navbar } from '../../iu/components/Navbar';
import { Personajes, Comic , Series , Search , CharactersPage} from '../pages';

export const HeroesRooters = () => {
    return (
        <>
        <Navbar/>

        <div>

            <Routes>

                <Route path='/personajes' element={<Personajes/>}></Route>
                <Route path='/comics' element={<Comic/>}></Route>
                <Route path='/series' element={<Series/>}></Route>
                <Route path='/search' element={<Search/>}></Route>
                <Route path='/personajes/:id' element={<CharactersPage/>}></Route>

                <Route path='/*' element={<Navigate to={'personajes'} />}></Route>

            </Routes>
        </div>
        </>
    )
}
