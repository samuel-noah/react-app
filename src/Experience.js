import AOS from 'aos';
import 'aos/dist/aos.css'

const Experience = () => {
    AOS.init()  
    return ( 
        <section data-aos = "fade-in" className="experience">
            <h1>Experience &#128035;</h1>
            <p> I love Idea Orieanted task that and problem solving activity.
                I am an efficient and goal oriented person. I am a team player
                Here are my work experience
            </p>
            <div className="experience-content">
                <ul>
                    <li> Office Manager at Gueci & Manik Lawyers </li>
                        <p>I help design Gueci & Manik Lawyers Website using wordpress. 
                        Injected Google Analytics and tracks website's traffic performance.
                        Manage all Gueci & Manik Lawyers social media content  </p>

                    <li> Research Staf at CBSA UI  </li>
                     <p> Conducted a research on students Interest. Design a daily task remainder using
                         Google Calendar
                     </p>
                </ul>
            </div>
        </section>

     );
}
 
export default Experience;