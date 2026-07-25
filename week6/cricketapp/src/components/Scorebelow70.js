import React from 'react';

function Scorebelow70({ players }) {
  // Arrow function filter for players scoring below 70
  const filteredPlayers = players.filter((player) => player.score < 70);

  return (
    <div>
      {filteredPlayers.map((player, index) => {
        const { name, score } = player;
        return (
          <p key={index}>
            {name} — Score: {score}
          </p>
        );
      })}
    </div>
  );
}

export default Scorebelow70;
