import "./App.css";
import { Routes, Route, useLocation, Redirect } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? <Header /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
