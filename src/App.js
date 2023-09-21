import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Intro from './Component/Intro/Intro';
import Service from './Component/Service/Service';
import CardDiv from './Component/CardDiv/CardDiv';
import Experience from './Component/Experience/Experience';
import Projects from './Component/Projects/Projects';
import Testimonials from './Component/Testimonials/Testimonials';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <CardDiv />
      <Experience/>
      <Projects />
      <Testimonials />
      </div>
  );
}

export default App;
