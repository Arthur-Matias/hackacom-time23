import React, { useState } from "react"
import TotalStaked from '../TotalStaked'
import DonateCard from '../DonateCard'
import './donation-card.css'

interface DonationProps{
    cause: string;
    pic: string;
}

const DonationCard: React.FC<DonationProps> = ({
    cause,
    pic
}) => {

    let amount:number = 189232947.2839;

    const [IsStakeOpen, setIsStakeOpen] = useState(false);
    const [IsDonateOpen, setIsDonateOpen] = useState(false);

    return(
        <>
            <div className={`stake-info ${IsStakeOpen?'open':''}`}>
                <TotalStaked title={cause} icon={pic} amount={amount} toggleView={()=>setIsStakeOpen(!IsStakeOpen)} />
            </div>
            <div className={`donate-info ${IsDonateOpen?'open':''}`}>
                <DonateCard title={cause} icon={pic} amount={amount} toggleView={()=>setIsDonateOpen(!IsDonateOpen)} />
            </div>
            <div className="donation-card">
                <div className="donation-cause-logo">
                    <img src={pic} alt="" />
                </div>
                <h2>{cause}</h2>
                <button className="btn" onClick={()=>setIsDonateOpen(!IsDonateOpen)}>Donate</button>
                <button className="btn" onClick={()=>setIsStakeOpen(!IsStakeOpen)}>Stake and earn</button>
            </div>
        </>
    )
}

export default DonationCard