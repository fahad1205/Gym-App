import {Link} from "react-router-dom"
import Style from "./navbar.module.css"

export function Navbar(){
    return(
        <div className={Style.main_Navdiv}>
            <div className={Style.logo}>
                 <Link to='/' style={{ textDecoration: 'none' }}> <h1>GYM</h1> </Link>
            </div>
            
            <ul className={Style.link_div}>
                <Link to = "/AboutUs"><li>AboutUs</li></Link>
                <Link to = "/Program"><li>Program</li></Link>
                <Link to = "/Training"><li>Training</li></Link>
                <Link to = "/Pricing"><li>Pricing</li></Link>
            </ul>    
        </div>
    )
} 