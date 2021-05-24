import React from "react";
import { Pool } from "../../models/types";
import DonationCard from "../../components/DonationCard"

import './donation.css'

import animalRescueIcon from '../../assets/causes-icons/paw.svg'
import educationIcon from '../../assets/causes-icons/education.svg'
import foodIcon from '../../assets/causes-icons/food.svg'
import healthIcon from '../../assets/causes-icons/health.svg'
import environmentIcon from '../../assets/causes-icons/leaf.svg'


export default function Donation(){
    
    const renderDonationCard = (cause: string) => {
        return <DonationCard key={cause} cause={cause} pic={getCauseImage(cause)} />
    }

    // let pools: Promise<string[]>;
    let cause: string[] = ['Animal Rescue', 'Education', 'Health', 'Environment', 'Against Hunger'];
    const getCauseImage = (txt: string):string=>{
        switch (txt) {
            case 'Animal Rescue':
                return animalRescueIcon
            case 'Against Hunger':
                return foodIcon
            case 'Education':
                return educationIcon
            case 'Environment':
                return environmentIcon
            case 'Health':
                return healthIcon;
            default:
                return '';
        }
    }
    return(
        <>
            <div id="Donation">
                <header>
                    <h2>Choose your cause:</h2>
                </header>
                <div className="donation-categories">
                    {cause.map(e=>renderDonationCard(e))}
                </div>
            </div>
        </>
    )
}