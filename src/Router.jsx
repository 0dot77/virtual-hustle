import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entrance from './pages/Entrance';
import Baseball from './pages/Baseball';
import Hangang from './pages/Hangang';
import Invite from './pages/Invite';
import Train from './pages/Train';
import Waterpark from './pages/Waterpark';
import Mart from './pages/Mart';
import Test from './pages/Test';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/Train" element={<Train />} />
        <Route path="/Mart" element={<Mart />} />
        <Route path="/Baseball" element={<Baseball />} />
        <Route path="/Waterpark" element={<Waterpark />} />
        <Route path="/Hangang" element={<Hangang />} />
        <Route path="/Invite" element={<Invite />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
