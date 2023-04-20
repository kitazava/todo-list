import React from "react"
import "../css/style.css"
import { Link } from "react-router-dom"
const Header = () =>{
    return(
        <header className="header" >
            <div className="container">
                <nav className="nav">
                    <Link to="/todo" className="nav_link">Main Todo</Link>
                    <Link to="/events" className="nav_link">Page Event</Link>
                    <Link to="/reminder" className="nav_link">Page Reminder</Link>
                    <Link to="/task" className="nav_link">Page Task</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header