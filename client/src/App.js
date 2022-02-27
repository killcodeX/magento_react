import "./App.css";
import { Routes, Route, useLocation, Redirect } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import ProductPage from "./components/productPage";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? <Header /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
