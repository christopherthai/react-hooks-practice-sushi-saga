import React from "react";

function Sushi({ sushi, onEatSushi }) {

  const { name, img_url, price, eaten } = sushi;

  const handleEatSushi = () => {
    if (!eaten) {
      onEatSushi(sushi);
    } else {
      alert("You need to pass an onEatSushi function to Sushi!");
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
