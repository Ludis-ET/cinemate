import React from "react";
import { ALLRoutes } from "./routes/ALLRoutes";
import { Header, Footer } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <ALLRoutes />
      <Footer />
    </>
  );
};

export default App;
