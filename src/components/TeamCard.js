import React from "react";
import './Hero.css';
import ProfileCard from "./Card";
function Team() {
    return (
        <section id="teams" className="teamSection">
            <div className="teamCards">
                <ProfileCard
                    image="https://i.ibb.co/v468tGB4/f154da6a5577947ab19cf2766830ba9e.jpg"
                    skills={["React", "Node.js", "CSS"]}
                    isOnline={true}
                />
                <ProfileCard
                    image="https://i.ibb.co/v468tGB4/f154da6a5577947ab19cf2766830ba9e.jpg"
                    skills={["Python", "Machine Learning", "TensorFlow"]}
                    isOnline={false}
                    lastSeen={new Date(new Date().setDate(new Date().getDate() - 5))} // 5 days ago
                />
            </div>
        </section>
    );
}

export default Team;