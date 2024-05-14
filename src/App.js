import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode have been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode have been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
       {/* <Router> */}
        <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} header="Please analyze your search here" mode={mode} />
          {/* Using exact word for matching exactly, otherwise its match partially */}
          {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} header="Please analyze your search here" mode={mode} />}>
            </Route>
          </Routes> */}
        </div>
        {/* <About /> */}
      {/* </Router> */}
      </>
  );
}

export default App;
