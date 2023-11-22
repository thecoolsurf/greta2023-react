import logo from './images/logo.png';

import img1 from './images/img1.webp';
import img2 from './images/img2.webp';
import img3 from './images/img3.webp';
import img4 from './images/img4.webp';
import img5 from './images/img5.webp';
import img6 from './images/img6.webp';

import './App.css';

const App = () => {
  return (
    <div className="main">

      <header className="header">
        <div className="logo" id="logo">
          <img src={logo} title="AirBnB" alt="AirBnB" />
        </div>
        <div className="search">
          <input id="search" type="text" className="search" max="100" placeholder="Search something" />
          <div className="picto"><i className="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div className="baseline"><a href="/">Mon logement sur AirBnB.</a></div>
      </header>
      <section className="section">

        <div className="widget">
          <div className="heart"><i className="fa-light fa fa-heart"></i></div>
          <div className="pager">
            <span id="page1" className="page"></span>
            <span id="page2" className="page"></span>
            <span id="page3" className="page"></span>
            <span id="page4" className="page"></span>
            <span id="page5" className="page"></span>
            <span id="page6" className="page"></span>
          </div>
          <div className="picture">
            <img src={img1} title="img1" alt="img1" />
          </div>
          <div className="country">Stege, <span>Danemark</span>.</div>
        </div>
        <div className="widget">
          <div className="heart"><i className=" fa fa-heart"></i></div>
          <div className="picture">
            <img src={img2} title="img1" alt="img1"/>
          </div>
          <div className="country">Monta Delgada, <span>Portugal</span></div>
        </div>
        <div className="widget">
          <div className="heart"><i className=" fa fa-heart"></i></div>
          <div className="picture">
            <img src={img3} title="img1" alt="img1" />
          </div>
          <div className="country">Drimnin, <span>Royaumme-Uni</span></div>
        </div>
        <div className="widget">
          <div className="heart"><i className=" fa fa-heart"></i></div>
          <div className="picture">
            <img src={img4} title="img1" alt="img1" />
          </div>
          <div className="country">Amsterdam, <span>Pays-Bas</span></div>
        </div>
        <div className="widget">
          <div className="heart"><i className=" fa fa-heart"></i></div>
          <div className="picture">
            <img src={img5} title="img1" alt="img1" />
          </div>
          <div className="country">Haute-Savoie, <strong>France</strong></div>
        </div>
        <div className="widget">
          <div className="heart"><i className=" fa fa-heart"></i></div>
          <div className="picture">
            <img src={img5} title="img1" alt="img1" />
          </div>
          <div className="country">Haute-Savoie, <strong>France</strong></div>
        </div>
        <div className="widget">
          <div className="heart"><i className=" fa fa-heart"></i></div>
          <div className="picture">
            <img src={img6} title="img1" alt="img1" />
          </div>
          <div className="country">Haute-Savoie, <strong>France</strong></div>
        </div>

      </section>
      <footer>
      </footer>

    </div>
  );
}

export default App;
