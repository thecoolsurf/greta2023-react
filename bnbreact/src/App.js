import logo from './assets/images/logo.png';

import img1 from './assets/images/img1.webp';
import img2 from './assets/images/img2.webp';
import img3 from './assets/images/img3.webp';
import img4 from './assets/images/img4.webp';
import img5 from './assets/images/img5.webp';
import img6 from './assets/images/img6.webp';
import img7 from './assets/images/img7.webp';

import './App.css';

const App = () => {
  return (
    <div className="App">

      <header class="header">
        <div class="logo" id="logo">
          <img src={logo} title="AirBnB" alt="AirBnB" />
        </div>
        <div class="search">
          <input id="search" type="text" class="search" max="100" placeholder="Search something" />
          <div class="picto"><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div class="baseline"><a href="/">Mon logement sur AirBnB.</a></div>
      </header>

      <section class="section">

        <div class="widget">
          <div class="heart"><i class="fa-light fa fa-heart"></i></div>
          <div class="pager">
            <span id="page1" class="page"></span>
            <span id="page2" class="page"></span>
            <span id="page3" class="page"></span>
            <span id="page4" class="page"></span>
            <span id="page5" class="page"></span>
            <span id="page6" class="page"></span>
          </div>
          <div class="picture">
            <img src={img1} title="img1" alt="img1" />
          </div>
          <div class="country">Stege, <span>Danemark</span>.</div>
        </div>
        <div class="widget">
          <div class="heart"><i class=" fa fa-heart"></i></div>
          <div class="picture">
            <img src={img2} title="img1" alt="img1"/>
          </div>
          <div class="country">Monta Delgada, <span>Portugal</span>.</div>
        </div>
        <div class="widget">
          <div class="heart"><i class=" fa fa-heart"></i></div>
          <div class="picture">
            <img src={img3} title="img1" alt="img1" />
          </div>
          <div class="country">Drimnin, <span>Royaumme-Uni</span>.</div>
        </div>
        <div class="widget">
          <div class="heart"><i class=" fa fa-heart"></i></div>
          <div class="picture">
            <img src={img4} title="img1" alt="img1" />
          </div>
          <div class="country">Amsterdam, <span>Pays-Bas</span>.</div>
        </div>
        <div class="widget">
          <div class="heart"><i class=" fa fa-heart"></i></div>
          <div class="picture">
            <img src={img5} title="img1" alt="img1" />
          </div>
          <div class="country">Haute-Savoie, <strong>France</strong>.</div>
        </div>
        <div class="widget">
          <div class="heart"><i class=" fa fa-heart"></i></div>
          <div class="picture">
            <img src={img6} title="img1" alt="img1" />
          </div>
          <div class="country">Haute-Savoie, <strong>France</strong>.</div>
        </div>
        <div class="widget">
          <div class="heart"><i class=" fa fa-heart"></i></div>
          <div class="picture">
            <img src={img7} title="img1" alt="img1" />
          </div>
          <div class="country">Haute-Savoie, <strong>France</strong>.</div>
        </div>

      </section>
      <footer>
      </footer>

    </div>
  );
}

export default App;
