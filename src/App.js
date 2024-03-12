import './App.css';
import Navbar from './components/Navbar.js'
import Forms from './components/Forms.js'
import About from './components/About.js';
import { useState } from 'react';
import Alert from './components/Alert.js';
function App() {

  const [mode, setMode] = useState("light");
  
  const [alert,setAlert]=useState(null);

  const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      showAlert("Dark Mode Activated", "success")
    }
    else{
      setMode('light')
      showAlert("Light Mode Activated","success")
    }
  }

  const showAlert=(message,status)=>{
    setAlert({
    message:message,
    status:status
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }
  return (
    <>
    
      <Navbar title="Welcome" about="Aboutus" modes={mode} toogleMode={toogleMode} />
      <section style={{backgroundColor:mode==='dark'? '#363d43':'white',color:mode==='dark'? 'white':'black'}}>
      <Alert alert={alert}/>
      <br/>
        <div className="container">
          <Forms text="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
        </div>
        <div className="container">
          <About/>
        </div>
      </section>
    </>
  );
}

export default App;
