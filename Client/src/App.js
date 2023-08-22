import React from "react";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Mac from "./components/Pages/mac/mac";
import Watch from "./components/Pages/watch/watch";
import Four04 from "./components/Four04/Four04";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import IPhone from "./components/Pages/IPhone/IPhone";
import ProductsPage from "./components/Pages/IPhone/ProductsPage/ProductsPage";
import Store from './components/Pages/Store/Store'
import IPad from './components/Pages/iPad/iPad'
import AirPods from "./components/Pages/AirPods/AirPods";
import Tv from "./components/Pages/Tv/Tv";
import Entertainment from "./components/Pages/Entertainment/Entertainment";
import Accessories from "./components/Pages/Accessories/Accessories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/iPhone" element={<IPhone />} />
        <Route path="/iPhone/:productId" element={<ProductsPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/iPad" element={<IPad />} />
        <Route path="/airPods" element={<AirPods />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
