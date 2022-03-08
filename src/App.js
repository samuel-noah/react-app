
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Experience from './Experience';
import Projects from './Projects';

function App() {
  return (
    <Router> 
    <div className="App">
        <Navbar/>
        <div className='content'>
          <Home></Home>
          <Experience></Experience>
          <Projects></Projects>
        </div>
    </div>

    </Router>
  );
}

export default App;
