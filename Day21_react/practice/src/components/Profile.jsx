import React from "react";

export default function Profile({ profile, index }) {
  return (
    <div className="wrap">
      <div className="card">
        {index == 0 && <div className="new">new</div>}
        <img src={profile.img} alt={profile.name}></img>
        <div className="profile__info">
          <h2>{profile.name}</h2>
          <p>{profile.field}</p>
        </div>
      </div>
    </div>
  );
}
