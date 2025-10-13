import { Routes, Route } from "react-router-dom";
import './App.css'
import LeftNavigation from './components/common/navigation/LeftNavigation'
import Home from './components/routes/Home';
import Documents from './components/routes/Documents';
import Temaplates from './components/routes/Templates';
import Sections from './components/routes/Sections';

function App() {
  return (
    <>
      <LeftNavigation />
      <main className="bg-[var(--color-alice-blue)] p-[20px] mx-[10px] my-[20px]">
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
