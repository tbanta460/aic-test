import React from 'react';
import './index.css';
import { TeamOne, TeamOnee, TeamOneee } from '../../../assets';
const Teams = () => {
    return(
        <>
            <div className="container-teams">
                <h3>Team Kami</h3>
                <div className="my-team">
                    <div> 
                        <img src={TeamOne} alt="my-team"/>
                        <h5>Ryo</h5>
                    </div>
                    <div> 
                        <img src={TeamOnee} alt="my-team"/>
                        <h5>Putri</h5>
                    </div>
                    <div> 
                        <img src={TeamOneee} alt="my-team"/>
                        <h5>Ananda</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teams