import './total-staked.css';

interface StakeProps{
    title: string;
    icon: string;
    amount: number;
    toggleView: ()=>void;
}

const TotalStaked:React.FC<StakeProps> = ({
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
                        <h1>{amount}</h1>
                        <p>mongs in stake</p>
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

export default TotalStaked;