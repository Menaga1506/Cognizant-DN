import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70';
import ListofIndianPlayers from './components/ListofIndianPlayers';
import './App.css';

// Plain function (not a component) - returns Odd position players using destructuring
function OddPlayers(indianTeam) {
  const [p1, , p3, , p5, , p7, , p9, , p11] = indianTeam;
  const oddPlayers = [p1, p3, p5, p7, p9, p11];
  return oddPlayers.map((name, index) => <p key={index}>{name}</p>);
}

// Plain function (not a component) - returns Even position players using destructuring
function EvenPlayers(indianTeam) {
  const [, p2, , p4, , p6, , p8, , p10] = indianTeam;
  const evenPlayers = [p2, p4, p6, p8, p10];
  return evenPlayers.map((name, index) => <p key={index}>{name}</p>);
}

function App() {
  var flag = true;

  // 11 players with name and score
  const players = [
    { name: 'Rohit Sharma', score: 85 },
    { name: 'Virat Kohli', score: 92 },
    { name: 'KL Rahul', score: 65 },
    { name: 'Shubman Gill', score: 78 },
    { name: 'Shreyas Iyer', score: 58 },
    { name: 'Hardik Pandya', score: 70 },
    { name: 'Ravindra Jadeja', score: 60 },
    { name: 'Jasprit Bumrah', score: 40 },
    { name: 'Mohammed Shami', score: 45 },
    { name: 'Kuldeep Yadav', score: 55 },
    { name: 'Ishan Kishan', score: 62 },
  ];

  // Indian team names (used for Odd/Even destructuring demo)
  const IndianTeam = [
    'Rohit Sharma',
    'Virat Kohli',
    'KL Rahul',
    'Shubman Gill',
    'Shreyas Iyer',
    'Hardik Pandya',
    'Ravindra Jadeja',
    'Jasprit Bumrah',
    'Mohammed Shami',
    'Kuldeep Yadav',
    'Ishan Kishan',
  ];

  // Two arrays merged using ES6 spread/merge feature
  const T20players = ['Rohit Sharma', 'Virat Kohli', 'Suryakumar Yadav'];
  const RanjiTrophyPlayers = ['Sarfaraz Khan', 'Yashasvi Jaiswal', 'Tilak Varma'];
  const IndianPlayers = [...T20players, ...RanjiTrophyPlayers];

  if (flag === false) {
    return (
      <div className="App">
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          {OddPlayers(IndianTeam)}
          <hr />
          <h1>Even Players</h1>
          {EvenPlayers(IndianTeam)}
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
