
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react'

function App() {

  const[mode, setMode] = useState("light");
  const [text, setText] = useState("DarK Mode")
  const[textColor, setTextColor] = useState("dark");
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      setTextColor("light")
      setText("Normal Mode")

      document.body.style.backgroundColor = "#18044ae3"
    }
    else{
      setMode("light");
      setTextColor("dark")
      setText("Dark Mode")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <> 
    <Navbar title="TextUtilsss" text={text} mode = {mode} textColor={textColor} toggleMode = {toggleMode}/>
    <div className="container">
    <Textform heading="Enter Text To Analyze..." mode={mode} />
    {/* <About/> */}
    </div>
    
    </>

  );
}

export default App;
