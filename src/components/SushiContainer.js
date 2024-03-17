import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi }) {

  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiComponents = sushis
    .slice(sushiIndex, sushiIndex + 4) // get the next 4 sushis
    .map((sushi) => {
      return (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          onEatSushi={onEatSushi}
        />
      );
    })

  const handleMoreClick = () => {
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushis.length); // get the next 4 sushis or wrap around to the beginning
  }

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
