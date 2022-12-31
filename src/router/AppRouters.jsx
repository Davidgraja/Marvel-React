import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth/pages/Login'
import { HeroesRooters } from '../heroes/routers/HeroesRouters'

export const AppRouters = () => {
    return (
        <Routes>
            <Route  path='login' element={<Login/>}> </Route>
            <Route  path='/*' element={<HeroesRooters/>}> </Route>
        </Routes>
    )
}
