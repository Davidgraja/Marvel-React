import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
    const {user , logout} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogaout = () =>{
        logout()
        navigate('/login' , {replace : true})    
    }
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">

                <a className="navbar-brand">Marvel info</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
                
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                        <NavLink className={ (props)=> `nav-link ${ props.isActive ? 'active text-info' : '' }` } aria-current="page" to='/characters'>Characters</NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink className={ (props)=> `nav-link ${ props.isActive ? 'active text-info' : '' }` } to="/comics">Comics</NavLink>
                        </li>
                        
                        <li className="nav-item">
                        <NavLink className={ (props)=> `nav-link ${ props.isActive ? 'active text-info' : '' }` } to={'/series'}>Series</NavLink>
                        </li>
                        
                    </ul>

                    <p className="my-2 mx-2  p-2 border-bottom border-success">{user?.name}</p>
                    <button  className="btn btn-outline-success" type="submit" onClick={ handleLogaout }>Logaout</button>
                </div>
            </div>
        </nav>
    )
}
