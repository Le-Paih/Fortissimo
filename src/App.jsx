import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageEng from "./pages/eng/HomePageEng";
import HomePageFr from "./pages/eng/fr/HomePageFr";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageEng />} />
        <Route path="fr" element={<HomePageFr />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
