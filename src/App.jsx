import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import How from "./pages/How";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how" element={<How />} />
        </Routes>
    );
}

export default App;
