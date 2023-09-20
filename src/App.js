
import './App.css';
//import About from './components/About'
import NavBar from './components/NavBar';
import React ,{ useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleBhaiMode=()=>{
    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("DARK MODE ENABLED","success");
    document.title="DARK Mode enbled";
  }
  else {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("LIGHT MODE ENABLED","success");
    document.title="Light Mode enbled";
  }
}
  return (
    <>

<NavBar title="TextUtils" mode={mode} toggleBhaiMode={toggleBhaiMode}/>
<Alert alert={alert}/>
<div className="container my-3">
   
<TextForm heading="ENTER YOUR TEXT HERE" showAlert={showAlert} mode={mode}/>
         
{/* <About/> */}

</div>

    </>
    
  );
}

export default App;
