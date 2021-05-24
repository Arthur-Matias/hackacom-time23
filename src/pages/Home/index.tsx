import React from 'react';
import { Link } from 'react-router-dom';
import orangepic from '../../assets/Connected-cuate 1.svg'
import lettering from '../../assets/mong.png'


import './home.css'

function Home() {
  return (
    <div className="home-container">
      <div id="Home">
        <div className="home-section">
          <header>
            <img src={lettering} alt="mong" />
            <p>(n.) synonym of empathy and humongous; transparency; safety; innovation </p>
          </header>
          <div>
            <p>Connecting people <b>everywhere</b></p>
            <div className="home-buttons-container">
              <Link className="home-btn" to="/buy">buy mong</Link>
              <Link className="home-btn" to="/donation">Donate</Link>
            </div>
          </div>
        </div>
        <div className="home-section">
          <img src={orangepic} alt="" />
        </div>
      </div>

      <footer id="home-footer">
        <div className="footer-section">
          <div>
            <a href="#">About us</a>
            <a href="#">About the project</a>
          </div>
          <div>
            <p>Copyright made with S2</p>
          </div>
        </div>
        <div className="footer-section"></div>
      </footer>
    </div>

  );
}

export default Home;
