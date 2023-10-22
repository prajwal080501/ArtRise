import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import SingleArt from "./pages/SignleArt";
import { UserContext } from "./context/UserContext";
import { useContext, useEffect } from "react";
import Settings from "./pages/Setings";
function App() {
  const { getUser } = useContext(UserContext);
  useEffect(() => {
    getUser();
  })
  return (
    <>
      <Router>
        <Navbar />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        {/* <Modal /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/art/:id" element={<SingleArt />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
