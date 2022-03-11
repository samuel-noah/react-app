
import Home from './Home';
import Navbar from './Navbar';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';
import Return from './Return';


function App() {

  return (

    <div className="App">
        <Navbar/>
        <div className='content'>
          <Home ></Home>
          <Experience ></Experience>
          <Projects></Projects>
          <Return></Return>
          <Footer></Footer>
        </div>
    </div>


  );
}

export default App;
