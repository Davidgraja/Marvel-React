import { useReducer } from 'react'
import { types } from '../types/types';
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const init = () =>{
    const user = JSON.parse(localStorage.getItem('user'));

    return{
        logged : !!user,
        user
    }
}



export const AuthProvider = ({children}) => {
    const [AuthState , dispatch] = useReducer(authReducer , {}, init)

    const login = ( name = '') =>{

        const user = { id : new Date().getSeconds() ,  name }

        const action = {
            type : types.login,
            payload : user
        }

        dispatch(action)

        localStorage.setItem('user' , JSON.stringify(user))

    }


    const logout = () =>{
        const action = {type : types.logout}
        dispatch(action)

        localStorage.removeItem('user')
    }


    return (
        <AuthContext.Provider  value={{...AuthState , login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}
