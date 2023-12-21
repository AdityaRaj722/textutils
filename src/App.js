import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Form from './component/Form';
import Navbar from './component/Navbar';
import Allert from './component/Allert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
        setAlert({
          msg: message,
          type :type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
  }
    const togglemode= ()=>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been Enabled","Success");
      // document.title= 'TextUtils- Dark Mode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been Enabled","Success");
    // document.title= 'TextUtils- Light Mode';
  }
}
  return (
    <>
    {/* <Router> */}
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={togglemode}/> 
      <Allert alert={alert}/>
      <div className="container my-3 " >
        {/* <Routes>
            <Route path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route path="/" element={<Form showAlert={showAlert} heading="Enter any text below to Try TextUtils" mode={mode}/>}>
            </Route>
          </Routes> */}
          <Form showAlert={showAlert} heading="Enter any text below to Try TextUtils" mode={mode}/>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
