import About from './About';
import Achievements from './Achievements';
import './App.css';
import Footer from './Footer';
import Introduction from './Introduction';
import Journey from './Journey';
import Navbar from './Navbar';
import Timeline from './Timeline';
import Why from './Why';

function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Why/>
      <Timeline/>
      <About/>
      <Achievements/>
      <Journey/>
      <Footer/>
    </div>
  );
}

export default App;
