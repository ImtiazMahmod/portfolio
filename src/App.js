import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/*" element={<Home />}></Route>
          {/* <Route
            path="/projects/:projectId"
            element={<ProjectsDetails />}
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
