import './App.css'
import { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]); 
  const [money, setMoney] = useState(100); 
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
      id: 0,
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
      id: 1,
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
      id: 2,
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
      id: 3,
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
      id: 4,
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
      id: 5,
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
      id: 6,
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
      id: 7,
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
      id: 8,
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
      id: 9,
    },
  ]);

  const handleAddFighter = (zombieFighter) => {
    if (money < zombieFighter.price) {
      console.log("Not enough money");
    } else if (money >= zombieFighter.price){
      setTeam([...team, zombieFighter]);
      setMoney(money - zombieFighter.price);
      setTotalStrength(totalStrength + zombieFighter.strength);
      setTotalAgility(totalAgility + zombieFighter.agility);
    }
  };

// to remove fighters I added id to each zombieFighter in the zombieFighters Array ( it did not work without id )

  const handleRemoveFighter = (id) => {
    const removedFighter = team.find((zombieFighter) => zombieFighter.id === id);

    setTeam(team.filter((zombieFighter) => zombieFighter.id !== id));
    setMoney(money + removedFighter.price);
    setTotalStrength(totalStrength - removedFighter.strength);
    setTotalAgility(totalAgility - removedFighter.agility);
  };

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h3><strong>Money:</strong> {money}</h3>
    <h3><strong>Team Strength:</strong> {totalStrength}</h3>
    <h3><strong>Team Agility:</strong> {totalAgility}</h3>
    {/* Condition to show the team members */}
    <h3><strong>Team:</strong></h3>
    {/* it truee show the following message */}
        {team.length === 0 ? (<p>Pick some team members</p>) : (
          // if the length is not 0 which means that we have members , show each member info 
          <ul>
            {team.map((member , id) => (
              <li>
                <img src={member.img} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>Price: {member.price}</p>
                  <p>Strength: {member.strength}</p>
                  <p>Agility: {member.agility}</p>
                  <button onClick={() => handleRemoveFighter(id)}>Remove</button>
              </li>
            ))}
          </ul> )}
        {/* showing all the zombieFighters */}
        <h3>Fighters:</h3>
      <ul>
        {zombieFighters.map((zombieFighter) => (
          <li>
            <img src={zombieFighter.img} alt={zombieFighter.name} />
              <h3>{zombieFighter.name}</h3>
              <p>Price: {zombieFighter.price}</p>
              <p>Strength: {zombieFighter.strength}</p>
              <p>Agility: {zombieFighter.agility}</p>
              <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;