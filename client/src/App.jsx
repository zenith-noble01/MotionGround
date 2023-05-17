import "./styles/app.scss";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Activation,
  Editor,
  LandingPage,
  Login,
  Playground,
  Register,
} from "./pages";
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
        <Route
          path="/activation/:userid"
          element={
            <Suspense fallback={<Loading />}>
              <Activation />
            </Suspense>
          }
        />
        <Route
          path="/playground"
          element={
            <Suspense fallback={<Loading />}>
              <Playground />
            </Suspense>
          }
        />
        <Route
          path="/editor"
          element={
            <Suspense fallback={<Loading />}>
              <Editor />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
