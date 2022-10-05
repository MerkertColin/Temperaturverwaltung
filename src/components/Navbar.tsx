import { FunctionComponent } from "react";
import "../styles/Navbar.css";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    return (  
        <nav>
            <ul>
                <li>Login</li>
                <li>Home</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;