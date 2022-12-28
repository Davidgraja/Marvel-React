import { NavLink } from "react-router-dom"

export const Navbar = () => {
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
                        <NavLink className={ (props)=> `nav-link ${ props.isActive ? 'active text-info' : '' }` } aria-current="page" to='/characters'>Personajes</NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink className={ (props)=> `nav-link ${ props.isActive ? 'active text-info' : '' }` } to="/comics">Comics</NavLink>
                        </li>
                        
                        <li className="nav-item">
                        <NavLink className={ (props)=> `nav-link ${ props.isActive ? 'active text-info' : '' }` } to={'/series'}>Series</NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink className={ (props)=> `nav-link ${ props.isActive ? 'active text-info' : '' }` } to='/search'>Search</NavLink>
                        </li> 

                    </ul>

                    <p className="my-2 mx-2  p-2 border-bottom border-success">Julio David gp</p>
                    <button className="btn btn-outline-success" type="submit">Logaout</button>
                </div>
            </div>
        </nav>
    )
}
