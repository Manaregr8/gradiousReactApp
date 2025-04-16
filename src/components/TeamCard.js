import React from "react";
import './Hero.css';
function Team() {
    return (
        <section id="teams" className="teamSection">
            {/*   
     
    <p>YOOOO</p>
    
    
     */}
            <div className="teamCards">
                <div className="teamCard">
                    <div className="cardUpper">
                        <img src="https://i.ibb.co/v468tGB4/f154da6a5577947ab19cf2766830ba9e.jpg" className="cardImageTeam" alt="card" />
                        <div className="stars">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p style={{
                            fontWeight:600,
                        }}>Film Director, Producer</p>
                        <div className="euro">
                            <i class="fa-solid fa-euro-sign"></i>
                            <p className="paraCard">19/hour</p>
                        </div>
                    </div>
                    <div className="cardbelow">
                        <p className="headerCard"> Manjeet Singh,22</p>
                        <div className="locationCard">
                        <i class="fa-solid fa-location-dot"></i>
                        <p className="paraLocation">India, Delhi-110059</p>
                        </div>
                        <p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="cardButtons">
                            <a href="manjeet" className="cardbtn">View CV</a>
                            <a href="singh" className="cardbtn primary">Make Offer</a>
                        </div>
                        <div className="statusCon">
                            <div className="circle">
                            </div>
                            <p className="status">Online</p>
                        </div>
                    </div>
                </div>
                <div className="teamCard">
                    <div className="cardUpper">
                        <img src="https://i.ibb.co/v468tGB4/f154da6a5577947ab19cf2766830ba9e.jpg" className="cardImageTeam" alt="card" />
                        <div className="stars">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p style={{
                            fontWeight:600,
                        }}>Film Director, Producer</p>
                        <div className="euro">
                            <i class="fa-solid fa-euro-sign"></i>
                            <p className="paraCard">19/hour</p>
                        </div>
                    </div>
                    <div className="cardbelow">
                        <p className="headerCard"> Manjeet Singh,22</p>
                        <div className="locationCard">
                        <i class="fa-solid fa-location-dot"></i>
                        <p className="paraLocation">India, Delhi-110059</p>
                        </div>
                        <p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div className="cardButtons">
                            <a href="manjeet" className="cardbtn">View CV</a>
                            <a href="singh" className="cardbtn primary">Make Offer</a>
                        </div>
                        <div className="statusCon">
                            <div className="circle">
                            </div>
                            <p className="status">Online</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Team;