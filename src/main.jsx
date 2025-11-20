
import { createRoot } from 'react-dom/client';
import './index.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';

const root = createRoot(document.getElementById('root'));

const path = window.location.pathname;

console.log("current path:" , path);

if (path==="/"){
  root.render(<Home />);
}else if (path==="/About"){
  root.render(<About />);
}else if (path==="/contact"){
  root.render(<Contact />);
}else{
  root.render(<h1>404 - Page Not Found </h1>);
}
