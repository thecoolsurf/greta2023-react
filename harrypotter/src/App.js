import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navigation } from './Components/Navigation/Navigation.js';

import { Home } from './Containers/Home/Home.js';
import { Houses } from './Containers/Houses/Houses.js';
import { Character } from './Containers/Character/Character.js';

function App() {

  const menus = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

  return (
    <div className="main">
      <BrowserRouter>
        <Navigation menus={menus} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gryffindor" element={<Houses url={'gryffindor'} />} />
          <Route path="/Hufflepuff" element={<Houses url={'hufflepuff'} />} />
          <Route path="/Ravenclaw" element={<Houses url={'ravenclaw'} />} />
          <Route path="/Slytherin" element={<Houses url={'slytherin'} />} />
          <Route path="/Character/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
