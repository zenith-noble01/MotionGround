import "./styles/app.scss";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages";
import { Loading } from "./components";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LandingPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
