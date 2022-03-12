import AOS from 'aos';
import 'aos/dist/aos.css'

const Projectlist = () => {
    AOS.init()
    return (
        <section data-aos = "fade-in" className="projects-container">
            <div className="projectlist">
                <a href="http://cowork.rf.gd/home.php"target="_blank"><h3>CoWork</h3></a>
                <h5>A CRUD web app using PHP and MySqli DBMS</h5>
            </div>
            <div className="projectlist">
                <h3>samuelwilliamnoah.com</h3>
                <h5>A personal portofolio website with React</h5>
            </div>
            <div className="projectlist">
                <a href="https://github.com/samuel-noah/openai-node" target="_blank"><h3>OPEN AI</h3></a>
                <h5>A simple chatbot using Express js and Open AI API</h5>
            </div>
            <div className="projectlist">
                <a href="https://github.com/samuel-noah/node-weather-api" target="_blank"><h3>WEATHER API</h3></a>
                <h5>A simple weather API App Using Express js and Open Weather Map API </h5>
            </div>
        </section>
     );
}
 
export default Projectlist;