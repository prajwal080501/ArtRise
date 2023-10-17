import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  )
}

export default App