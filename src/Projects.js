import { useState } from "react";
import Projectlist from "./Projectlist";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-scroll"

const Projects = () => {
    AOS.init()
    const [projects, setProjects] = useState('');

    const handleClick = () => {
        setProjects(
        <Projectlist>

        </Projectlist>)
    }

    return ( 
        <section data-aos = "fade-in"  className="projects">
            <h1>Projects &#128079;</h1>
            <p> Up to the moment I have been coding for schooll task and side projects 
                I have worked with some technologies. Here are some of my projects.
            </p>
                <div className="projects-content">
                </div>
            <Link to ="projectlist" smooth ={true} duration = {1000} ><button onClick={handleClick}>See Projects</button></Link> 
                <p>{projects}</p>
        </section>
     );
}
 
export default Projects;