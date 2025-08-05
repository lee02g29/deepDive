import React from "react";
import './TeamCard.css'

export default function TeamCard({ name, username, email, phone }) {
  return (
    <div className='card'>
      <div className="name">{name}</div>
      <h3 className='username'>{username}</h3>
      <p className='email'>{email}</p>
      <p className='phone'>{phone}</p>
    </div>
  );
}
