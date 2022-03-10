import { useState } from "react";
import Projectlist from "./Projectlist";

const Projects = () => {
    const [projects, setProjects] = useState('');

    const handleClick = () => {
        setProjects(
        <Projectlist>

        </Projectlist>)
    }

    return ( 
        <section className="projects">
            <h1>Projects &#128079;</h1>
            <p> I love Idea Orieanted task that and problem solving activity.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur euismod, nisi vel consectetur euismod,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur euismod, nisi vel consectetur euismod,
            </p>
                <div className="projects-content">
                </div>
                <button onClick={handleClick}>See Projects</button>
                <p>{projects}</p>
        </section>
     );
}
 
export default Projects;