import "./styles/app.scss";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { LandingPage, Login, Register } from "./pages";
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
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
