import "./App.css";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./components/screens/auth/RegisterScreen";
import LoginScreen from "./components/screens/auth/LoginScreen";
import ForgotPasswordScreen from "./components/screens/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/auth/ResetPasswordScreen";
import Machine from "./components/screens/machine/Machine";

function App() {
  return (
    <div className={`App ${styles["page"]}`}>
      <Router>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/register"
            element={<RegisterScreen />}
            history="/"
          />
          <Route exact path="/login" element={<LoginScreen />} />

          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPasswordScreen />}
          />

          <Route
            exact
            path="/passwordreset/:resetToken"
            element={<ResetPasswordScreen />}
          />
          <Route path="/machine" element={<Machine />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
