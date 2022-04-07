import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";

import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import CategoriesContext from "./contexts/appContext";

const App = () => {
  const [categories, setCategories] = React.useState(null);
  const value = { categories, setCategories };
  console.log(value);
  return (
    <div className="app">
      <CategoriesContext.Provider value={value}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route
              path="/ticket/:id"
              element={<TicketPage editMode={true} />}
            />
          </Routes>
        </Router>
      </CategoriesContext.Provider>
    </div>
  );
};

export default App;
