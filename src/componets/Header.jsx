import React from "react"
import "../css/style.css"
import { Link } from "react-router-dom"
const Header = () =>{
    return(
        <header className="header" >
            <div className="container">
                <nav className="nav">
                    <Link to="/todo" className="nav_link">Главная Todo</Link>
                    <Link to="/events" className="nav_link">Мероприятие</Link>
                    <Link to="/reminder" className="nav_link">Напоминание</Link>
                    <Link to="/task" className="nav_link">Задача</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header