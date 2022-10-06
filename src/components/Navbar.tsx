import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    return (  
        <nav>
            <ul>
                <li><Link className="link" to="login">Login</Link></li>
                <li><Link className="link" to="/">Home</Link></li>
            </ul>
            
            
        </nav>
    );
}
 
export default Navbar;