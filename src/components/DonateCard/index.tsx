import './donate-card.css';

interface StakeProps{
    title: string;
    icon: string;
    amount: number;
    toggleView: ()=>void;
}

const DonateCard:React.FC<StakeProps> = ({
    title,
    icon,
    amount,
    toggleView
})=>{
    return(
        <>
            <div id="Total-staked">
                <div className="stake-container">
                    <header>
                        <img src={icon} alt="" />
                        <p>{title}</p>
                    </header>
                    <div className="stake-amount">
                        <div className="backicon" onClick={toggleView}>
                            close
                        </div>
                        <input type="text" name="" id="" placeholder="enter ong name" />
                        <input type="number" name="" id="" placeholder="enter amount" />
                        <button className="donate-btn">Donate</button>
                    </div>
                    <div className="benefited">
                        <header>Benefited ONG's:</header>
                        <div className="all-benefited">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonateCard;