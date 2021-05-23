import Nav from '../Nav'
import Logo from '../Logo'
import SwitchButton from '../SwitchButton'

import './navbar.css'

export default function Navbar(){
    let menuItems: string[] = ["home", "wallet","buy mong","donation","profile"];
    return (
    <div className="navbar">
        <Logo />
        <div>
            <Nav items={menuItems}/>
        </div>
        <SwitchButton />
    </div>
    )
}