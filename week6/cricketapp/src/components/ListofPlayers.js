import React from 'react';

function ListofPlayers({ players }) {
  return (
    <div>
      {players.map((player, index) => {
        const { name, score } = player; // destructuring
        return (
          <p key={index}>
            {name} — Score: {score}
          </p>
        );
      })}
    </div>
  );
}

export default ListofPlayers;
