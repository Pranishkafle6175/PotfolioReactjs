import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Intro from './Component/Intro/Intro';
import Service from './Component/Service/Service';
import CardDiv from './Component/CardDiv/CardDiv';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <CardDiv />
      </div>
  );
}

export default App;
