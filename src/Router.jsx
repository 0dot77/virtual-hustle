import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Baseball from './pages/Baseball';
import Hangang from './pages/Hangang';
import Train from './pages/Train';
import Waterpark from './pages/Waterpark';
import Mart from './pages/Mart';
import MixedArea from './pages/MixedArea';
import Bridge from './pages/Bridge';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bridge />} />
        <Route path="/train" element={<Train />} />
        <Route path="/mart" element={<Mart />} />
        <Route path="/baseball" element={<Baseball />} />
        <Route path="/waterpark" element={<Waterpark />} />
        <Route path="/hangang" element={<Hangang />} />
        <Route path="/mixed-area" element={<MixedArea />} />
      </Routes>
    </BrowserRouter>
  );
}
