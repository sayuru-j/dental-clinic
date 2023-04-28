import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Inventory from "./pages/inventory";
import UpdateItem from "./components/inventory/UpdateItem";

function App() {
  return (
    <>
      <Header />

      <main className="">
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/update/:id" element={<UpdateItem />} />
          </Routes>
        </Layout>
      </main>

      <Footer />
    </>
  );
}

export default App;
