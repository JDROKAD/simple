import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";



// {import {
//   Routes,
//   Route,
// } from "react-router-dom";
// }
function App() {
  const [mode, setMode] = useState("dark"); // Wheter dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been Enable", "success");
      document.title = "Simple -Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enable", "success");
      document.title = "Simple -Light Mode";
    }
  };
  return (
    <>
    <Navbar title="Simple" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    
        {/* {<Routes>} */}

        {/* <div className="container my-3"> */}
         
            {/* {<Route path="/about" element={<About />} />} */}
            <TextForm
            showAlert={showAlert}
            heading="Enter the text to analyze below"
            mode={mode}
          />

           {/* { <Route path="/" element={} />
        </Routes>} */}
        </>
  );
}

export default App;
