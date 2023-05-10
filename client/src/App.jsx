import "./styles/app.scss";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            // <Suspense>
            <LandingPage />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
