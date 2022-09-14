
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {
  return (
    <> 
    <Navbar title="TextUtilsss" />
    <div className="container">
    {/* <Textform heading="Enter Text To Analyze..." /> */}
    <About/>
    </div>
    
    </>

  );
}

export default App;
