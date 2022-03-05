import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>Samuel William Noah</h2>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
            </div>
        </nav>
     );
}
 
export default Navbar;