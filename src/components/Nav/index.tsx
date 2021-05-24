import React from "react"
import { Link } from "react-router-dom"
import './nav.css'

interface NavProps{
    items: string[]
}

const Nav: React.FC<NavProps> = ({items})=>{
    function renderItem(txt:string){
        return <Link key={txt} className="menu-link" to={txt}>{txt}</Link>
    }
    return(
        <>
            <nav id="menu">
                {items.map(e=>renderItem(e))}
            </nav>
        </>
    )
}

export default Nav