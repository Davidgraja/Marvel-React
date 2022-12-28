import { Navigate, Route , Routes } from 'react-router-dom';
import { Navbar } from '../../iu/components/Navbar';
import { Personajes, Comic , Series , Search , InfoPage} from '../pages';

export const HeroesRooters = () => {
    return (
        <>
        <Navbar/>

        <div>

            <Routes>

                <Route path='info/:id' element={<InfoPage/>}></Route>
                <Route path='characters' element={<Personajes/>}></Route>
                <Route path='comics' element={<Comic/>}></Route>
                <Route path='series' element={<Series/>}></Route>
                <Route path='search' element={<Search/>}></Route>
                <Route path='/*' element={<Navigate to={'characters'} />}></Route>

            </Routes>
        </div>
        </>
    )
}
