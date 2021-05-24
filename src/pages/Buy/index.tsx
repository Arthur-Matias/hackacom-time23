import './buy.css'

import card1 from '../../assets/cards/card1.png'
import card2 from '../../assets/cards/card2.png'

export default function Buy(){
    return(
        <>
            <div id="Buy">
                <div className="buy-section">
                    <h2>Buy some <b>Mong</b></h2>
                    <h2>multiply your profits and help ONGs</h2>
                    <div className="payment">
                        <>
                            <p className="active">credit card</p>
                            <p>bank deposit</p>
                            <p>cash balance</p>
                            <p>bank slip</p>
                            <p>crypto coin</p>
                        </>
                        <div className="payment-inputs">
                            <label htmlFor="quantity-to-pay">
                                Spend
                            </label>
                            <input type="number" name="quantity-to-pay" id="quantity-to-pay" />
                            <label htmlFor="quantity-to-receive">
                                Receive
                            </label>
                            <input type="number" name="quantity-to-receive" id="quantity-to-receive" />
                            <button>Confirm</button>
                        </div>
                    </div>
                </div>
                <div className="buy-section">
                    <div className="credit-cards">
                        <img className="active" src={card1} alt="" />
                        <img src={card2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}