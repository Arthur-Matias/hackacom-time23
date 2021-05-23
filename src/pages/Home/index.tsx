import React from 'react';
import orangepic from '../../assets/Connected-cuate 1.svg'
import lettering from '../../assets/mong.png'

import './home.css'

function Home() {
  return (
    <div className="Home">
      <div className="home-section">
        <div>
          <img src={lettering} alt="mong" />
          <p>(n.) synonym of empathy and humongous; transparency; safety; innovation </p>
        </div>
        <div>
          <p>Connecting people <b>everywhere</b></p>
          <div className="home-buttons-container">
            <button>buy mong</button>
            <button>donate</button>
          </div>
        </div>
      </div>
      <div className="home-section">
        <img src={orangepic} alt="" />
      </div>
    </div>
  );
}

export default Home;
