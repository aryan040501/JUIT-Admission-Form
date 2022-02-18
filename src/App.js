import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Pages/Form";
import DataF from "./Pages/DataF";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/getData" element={<DataF />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
