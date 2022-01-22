import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Routes>
      <Route exact path="" element={<HomePage />}> </Route>
    </Routes>
  );
}

export default App;
