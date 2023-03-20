import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Items from "./Components/Items";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<App />} />
                <Route path = "/items" element={<Items />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;
