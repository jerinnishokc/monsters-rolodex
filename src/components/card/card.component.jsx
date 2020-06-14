import React from 'react';
import './card.style.css';

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monsters"
        src={`https://robohash.org/${props.monster.id}.png?set=set1`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
