import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Error } from "./error/Error";
import { PrivateRoute } from "./private/PrivateRoute";
const Login = lazy(() => import('./view/login/Login'))
const Register = lazy(() => import('./view/Register/Register'))
const Get = lazy(() => import('./view/get/Get'))
const View = lazy(() => import('./view/sigleuser/view'))
function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading.....................</h1>}>
        <Routes>
          <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to={'/login'} />} replace />
            <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/view/:id" element={<View />} />
            <Route path="/get" element={<Get />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
