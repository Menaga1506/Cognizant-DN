import React from 'react';

function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <p key={index}>{player}</p>
      ))}
    </div>
  );
}

export default ListofIndianPlayers;
