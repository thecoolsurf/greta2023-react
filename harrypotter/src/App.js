import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navigation } from './Components/Navigation/Navigation.js';

import { Home } from './Containers/Home/Home.js';
import { Gryffindor } from './Containers/Gryffindor/Gryffindor.js';
import { Hufflepuff } from './Containers/Hufflepuff/Hufflepuff.js';
import { Ravenclaw } from './Containers/Ravenclaw/Ravenclaw.js';
import { Slytherin } from './Containers/Slytherin/Slytherin.js';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gryffindor" element={<Gryffindor />} />
          <Route path="/Hufflepuff" element={<Hufflepuff />} />
          <Route path="/Ravenclaw" element={<Ravenclaw />} />
          <Route path="/Slytherin" element={<Slytherin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
