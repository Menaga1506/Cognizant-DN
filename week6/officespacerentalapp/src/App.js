import React from 'react';
import './App.css';

// Function that returns a CSS class name based on Rent value
function getColor(itemName) {
  let colors = [];
  if (itemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }
  return colors.join(' ');
}

function App() {
  const element = 'Office Space';

  const sr = 'https://placehold.co/400x250?text=Office+Space';

  // JSX stored in a variable, using the img attribute
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  // Single office object
  const ItemName = { Name: 'DBS', Rent: 50000, Address: 'Chennai' };

  // List of office objects to loop through
  const officeList = [
    { Name: 'DBS', Rent: 50000, Address: 'Chennai' },
    { Name: 'Prestige Business Park', Rent: 55000, Address: 'Coimbatore' },
    { Name: 'DLF Cyber City', Rent: 75000, Address: 'Gurugram' },
    { Name: 'RMZ Ecoworld', Rent: 92000, Address: 'Bengaluru' },
    { Name: 'Cyber Towers', Rent: 59000, Address: 'Hyderabad' },
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>

      {jsxatt}

      <h1>Name: {ItemName.Name}</h1>
      <h3 className={getColor(ItemName)}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr />

      <h2>All Available Office Spaces</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index}>
            <h3>Name: {item.Name}</h3>
            <h3 className={getColor(item)}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
