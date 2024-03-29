import React from 'react';
import './SoldierDetails.css'

const SoldierDetails = (props) => {
    const { name, salary, rank, age, img, skill } = props.soldier
    return (
        <div className='soldier-details'>
            <div className='images'>
                <img src={img} alt="SolderImage" />
            </div>
            <div className="deatils-text">
                <p style={{ textAlign: "center", marginBottom: "2px" }}>
                    <b><i className="fab fa-galactic-senate"></i> {name} </b></p>
                <p><b>Rank:</b> {rank}</p>
                <p><b>Skill:</b> {skill}</p>
                <p><b>Salary:</b> {salary} ৳</p>
                <p><b>Age:</b> {age}</p>
            </div>
            <button onClick={() => props.handleButton(props.soldier)}
            ><i className="fab fa-hire-a-helper"></i> Hire Now</button>
        </div>
    );
};

export default SoldierDetails;