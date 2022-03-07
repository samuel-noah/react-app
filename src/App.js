
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Experience from './Experience';

function App() {
  return (
    <Router> 
    <div className="App">
        <Navbar/>
        <div className='content'>


            <Home></Home>

          <Experience></Experience>


        </div>
    </div>

    </Router>
  );
}

export default App;
