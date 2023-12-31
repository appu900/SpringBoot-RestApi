import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Error from "./pages/Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/error" element={<Error />} />
        <Route path="/update" element={<UpdatePage/>} />
      </Routes>
    </div>
  );
}

export default App;
