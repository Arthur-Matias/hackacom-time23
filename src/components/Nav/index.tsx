import React from "react"
import './nav.css'

interface NavProps{
    items: string[]
}

const Nav: React.FC<NavProps> = ({items})=>{
    function renderItem(txt:string){
        return <a href={txt}>{txt}</a>
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