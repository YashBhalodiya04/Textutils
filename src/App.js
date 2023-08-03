import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) =>{
    setalert({
      msg:message,
      type:type
    });

    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const changemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#071f40";
      showalert("Dark mode has been enablad", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enablad", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar title="Textutils" mode={mode} togglemode={changemode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exect path="/About" element={<About mode={mode}/>} />
          <Route exect path="/" element={<TextForm heading="Enter the text here" mode={mode} showalert={showalert}/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
