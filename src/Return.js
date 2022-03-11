import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Return = () => {
AOS.init()
    return ( 
        <div data-aos = "fade-in" className="return">
            <Link to="navbar" smooth ={true} duration = {1000}><h1>&#128070;</h1></Link>
        </div>
     );
}
 
export default Return;