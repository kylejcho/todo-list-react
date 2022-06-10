import SidebarContentContainer from "./components/SidebarContentContainer";
import { AuthContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import React from "react";

export default function App() {
  //Context providing props from firebase auth functions
  //Once user is signed in, navigate to protected home path
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="checkr-react/" element={<Signin />} />
        <Route path="checkr-react/signup" element={<Signup />} />
        <Route
          path="/checkr-react/home"
          element={
            <ProtectedRoute>
              <SidebarContentContainer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}
