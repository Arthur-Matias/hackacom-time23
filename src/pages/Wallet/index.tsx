import React from 'react';

import projAjudeiLogo from '../../assets/photo.png'

import './wallet.css'

function Wallet() {
  return (
    <div id="Wallet">
      <header>
        <p>Your balance:</p>
        <h2 className="wallet-amount">
          926.21
        </h2>
        <h2>
          mong
        </h2>
      </header>
      <div className="wallet-transactions">
        <header>
          <div className="active">Sent</div>
          <div>Received</div>
        </header>
        <div className="search-transactions">
          <input type="text" placeholder="Search transaction" />
        </div>
        <div className="transactions-history">
          <header>Today</header>
          <div className="transaction-card">
            <div className="transaction-card-section">
              <img src={projAjudeiLogo} alt="" />
              <div className="transaction-data">
                <p>to: <b>Projeto Ajudei</b></p>
                <p className="date">
                  20, January, 2021
              </p>
              </div>
            </div>
            <div className="transaction-card-section">
              <p className="qntt">
                972.00
              </p>
            </div>
          </div>
        </div>
        <div className="transactions-history">
          <header>Yesterday</header>
          <div className="transaction-card">
            <div className="transaction-card-section">
              <img src="#" alt="" />
              <div className="transaction-data">
                <p>to: <b>Projeto Ajudei</b></p>
                <p className="date">
                  20, January, 2021
              </p>
              </div>
            </div>
            <div className="transaction-card-section">
              <p className="qntt">
                972.00
              </p>
            </div>
          </div>
          <div className="transaction-card">
            <div className="transaction-card-section">
              <img src="#" alt="" />
              <div className="transaction-data">
                <p>to: <b>Projeto Ajudei</b></p>
                <p className="date">
                  20, January, 2021
              </p>
              </div>
            </div>
            <div className="transaction-card-section">
              <p className="qntt">
                972.00
              </p>
            </div>
          </div>
          <div className="transaction-card">
            <div className="transaction-card-section">
              <img src="#" alt="" />
              <div className="transaction-data">
                <p>to: <b>Projeto Ajudei</b></p>
                <p className="date">
                  20, January, 2021
              </p>
              </div>
            </div>
            <div className="transaction-card-section">
              <p className="qntt">
                972.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
