import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {menus.map((item)=>{ 
            return (
              <Route path={item} element={<Houses url={item.toLowerCase()} />} />
            )
          })}
          <Route path="/Character/:id" element={<Character />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
