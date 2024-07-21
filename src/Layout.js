import React from "react";
import { Link, Outlet} from "react-router-dom";

export default function Layout(){
    return(
        <div>
            <nav className="navbar">
                <Link to="/"><h4 className="nav--link">Top songs in country</h4></Link>
                <Link to="filtersong"><h4 className="nav--link3">Song Details</h4></Link>
            </nav>
            <Outlet />
        </div>
    )
}