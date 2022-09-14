
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react'
import Alert from './Components/Alert';

function App() {

  const[mode, setMode] = useState("light");
  const [text, setText] = useState("DarK Mode")
  const[textColor, setTextColor] = useState("dark");

  const [alert, setAlert] = useState(null)

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      setTextColor("light")
      setText("Normal Mode")
     
      document.body.style.backgroundColor = "#18044ae3"

      showAlert("dark mode enabled", "success")
    }
    else{
      setMode("light");
      setTextColor("dark")
      setText("Dark Mode")
      document.body.style.backgroundColor = "white"
      showAlert("light mode enabled", "warning")
    }
  }

  const showAlert = (message, type) =>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <> 
    <Navbar title="TextUtilsss" text={text} mode = {mode} textColor={textColor} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Textform heading="Enter Text To Analyze..."  mode={mode} showAlert={showAlert} />
    {/* <About/> */}
    </div>
    
    </>

  );
}

export default App;
