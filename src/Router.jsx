import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entrance from './pages/Entrance';
import Invite from './pages/Invite';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invite />} />
        <Route path="/entrance" element={<Entrance />} />
      </Routes>
    </BrowserRouter>
  );
}
