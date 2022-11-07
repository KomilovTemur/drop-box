import React from "react";
import AppRouter from "./components/routing/AppRouter";
import AuthStore from "./components/store/AuthStore";

function App() {
  return (
    <AuthStore>
      <AppRouter />
    </AuthStore>
  );
}

export default App;
