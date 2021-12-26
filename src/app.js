import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import { Home, Browse, Signin, Signup } from "./pages";
// CONSTANTS
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} />
        <Route path={ROUTES.SIGN_IN} element={<Signin />} />
        <Route path={ROUTES.SIGN_UP} element={<Signup />} />
      </Routes>
    </Router>
  );
}
