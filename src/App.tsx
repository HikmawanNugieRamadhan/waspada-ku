import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { DarkModeProvider } from "./context/DarkModeContext";

const App = () => (
  <DarkModeProvider>
    <Router>
      <AppRouter />
    </Router>
  </DarkModeProvider>
);

export default App;