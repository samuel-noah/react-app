
import { Link } from "react-scroll"

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>Samuel William Noah </h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="experience" smooth ={true} duration = {1000} >Experience</Link>
                <Link to="projects" smooth = {true} duration = {1000}>Projects</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;