import logo from './images/logo.png';
import './App.css';

const App = () => {
  return (
    <div className="main">

      <header className="header">
        <div className="logo" id="logo">
          <img src={logo} title="AirBnB" />
        </div>
        <div className="search">
          <input id="search" type="text" className="search" maxlength="100" placeholder="Search something" />
          <div className="picto"><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div className="baseline"><a href="#">mon logement sur AirBnB</a></div>
      </header>
      
    </div>
  );
}

export default App;
