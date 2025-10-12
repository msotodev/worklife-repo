import { Routes, Route } from "react-router-dom";
import './App.css'
import LeftNavigation from './components/common/Navigation/LeftNavigation'
import Home from './components/routes/Home';
import Documents from './components/routes/Documents';
import Temaplates from './components/routes/Templates';
import Sections from './components/routes/Sections';

function App() {
  return (
    <>
      <LeftNavigation />
      <main className="content">
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
