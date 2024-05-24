import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import About from "./components/About";
import Terms from "./components/Terms";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Account from "./components/Account";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const showNavbar = () => {
    return !["/signup", "/"].includes(location.pathname);
  };

  return (
    <div className="App">
      <CartProvider>
        {showNavbar() && <Navbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
