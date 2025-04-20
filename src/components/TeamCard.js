import React from "react";
import ProfileCard from "./Card";
import profiles from "../data/profiles.json";
import "./Hero.css";

function Team() {
  return (
    <section id="teams" className="teamSection">
      <div className="teamCards">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </section>
  );
}

export default Team;
