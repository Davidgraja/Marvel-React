import { Navigate, Route , Routes } from 'react-router-dom';
import { Navbar } from '../../iu/components/Navbar';
import { Personajes, Comic , Series , Search , PagesInformation} from '../pages';

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
                <Route path='/personajes/:id' element={<PagesInformation/>}></Route>
                <Route path='/comics/:id' element={<PagesInformation/>}></Route>
                <Route path='/series/:id' element={<PagesInformation/>}></Route>

                <Route path='/*' element={<Navigate to={'personajes'} />}></Route>

            </Routes>
        </div>
        </>
    )
}
