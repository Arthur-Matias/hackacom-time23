import React from "react";
import Navbar from "../Navbar";

const Layout:React.FC = (props)=>{
    return(
        <>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </>
    )
}

export default Layout