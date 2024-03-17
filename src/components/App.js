import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([]);
  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((sushis_data) => {
        const updatedSushis = sushis_data.map((sushi) => {
          return {
            ...sushi,
            eaten: false,
          };
        });

        setSushis(updatedSushis);

      });
  }, []);

  const handleEatSushi = (eatenSushi) => {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          return {
            ...sushi,
            eaten: true,
          };
        } else {
          return sushi;
        }
      });

      setSushis(updatedSushis);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("You don't have enough money!");
    }
  }

  const handleAddMoney = (moreMoney) => {
    setWallet((wallet) => wallet + moreMoney);
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
      <Table wallet={wallet} onAddMoney={handleAddMoney} />
    </div>
  );
}

export default App;
