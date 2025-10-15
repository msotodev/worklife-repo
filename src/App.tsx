import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/routes/Home';
import Temaplates from './components/routes/Templates';
import LeftNavigation from "./components/common/LeftNavigation";
import Sections from "./components/routes/Sections";
import Documents from "./components/routes/Documents";

function App() {
  return (
    <>
      <LeftNavigation />
      <main className="bg-[var(--color-alice-blue)] mx-[10px] my-[20px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/templates" element={<Temaplates />} />
        </Routes>
      </main>
    </>
  )
}

export default App