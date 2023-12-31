import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Intro from './Component/Intro/Intro';
import Service from './Component/Service/Service';
import CardDiv from './Component/CardDiv/CardDiv';
import Experience from './Component/Experience/Experience';
import Projects from './Component/Projects/Projects';
import Testimonials from './Component/Testimonials/Testimonials';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';


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
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
