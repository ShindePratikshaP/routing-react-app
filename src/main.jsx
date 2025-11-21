
import { createRoot } from 'react-dom/client';
import './index.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home />} />
      <Route path="/about"element={<About />} />
      <Route path="/contact"element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

