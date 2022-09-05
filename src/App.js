import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Country from "./components/Country/Country";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [darkMode, setdarkMode] = React.useState(false)

  function toggleDarkMode(){
    setdarkMode(prevDarkMode => !prevDarkMode)
  }

 

  return (
    <Router>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      
      <Routes>
        <Route path="/" element={<Main darkMode={darkMode} />}/>
        <Route path="/:name" element={<Country darkMode={darkMode}/>}/>
      </Routes>
    </Router>
    // <div className="App">
    //   <Header 
    //     darkMode = {darkMode}
    //     toggleDarkMode = {toggleDarkMode}
    //   />
    //   <Main 
    //     darkMode = {darkMode}
    //   />
    // </div>
  );
}

export default App;
