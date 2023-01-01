import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth/pages/Login'
import { HeroesRooters } from '../heroes/routers/HeroesRouters'
import { PrivateRouters } from './PrivateRouters'
import { PublicRouters } from './PublicRouters'

export const AppRouters = () => {
    return (
        <Routes>
            <Route  path='login' element={<PublicRouters> <Login/> </PublicRouters>}> </Route>
            <Route  path='/*' element={<PrivateRouters> <HeroesRooters/> </PrivateRouters>}> </Route>
        </Routes>
    )
}
