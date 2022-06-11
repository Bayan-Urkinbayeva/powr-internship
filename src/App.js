import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Save from "./views/Save"
import Get from "./views/Get";
function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Save/>} />
      <Route path="/:id" element={<Get/>} />
    </Routes>
  </Router>
  )
}

export default App;