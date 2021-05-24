import React from "react";
import Navbar from "../Navbar";

import './layout.css'

const Layout:React.FC = (props)=>{
    return(
        <>
            <div className="container">
                <Navbar />
                {props.children}
            </div>
        </>
    )
}

export default Layout