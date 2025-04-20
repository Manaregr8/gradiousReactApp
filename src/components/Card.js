import React from "react";

function getLastSeenText(lastSeen) {
  const now = new Date();
  const seen = new Date(lastSeen);
  const diffMs = now - seen;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 7) return "Last seen several days ago";
  if (diffDays >= 1) return `Last seen ${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  return `Last seen ${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
}

function ProfileCard({ profile }) {
  const { name, age, location, image, skills, isOnline, lastSeen } = profile;

  return (
    <div className="teamCard">
      <div className="cardUpper">
        <img src={image} className="cardImageTeam" alt="profile" />
        <div className="stars">
          <i className="fa-solid fa-star"></i>
        </div>
        <p style={{ fontWeight: 600 }}>Film Director, Producer</p>
        <div className="euro">
          <i className="fa-solid fa-euro-sign"></i>
          <p className="paraCard">19/hour</p>
        </div>
      </div>
      <div className="cardbelow">
        <p className="headerCard">{name}, {age}</p>
        <div className="locationCard">
          <i className="fa-solid fa-location-dot"></i>
          <p className="paraLocation">{location}</p>
        </div>
        <p className="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skillTag">{skill}</span>
          ))}
        </div>
        <div className="cardButtons">
          <a href="#" className="cardbtn">View CV</a>
          <a href="#" className="cardbtn primary">Make Offer</a>
        </div>
        <div className="statusCon">
          <div className={`circle ${isOnline ? 'online' : 'offline'}`}></div>
          <p className="status">
            {isOnline ? "Online" : getLastSeenText(lastSeen)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
