import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people] = useState([
    {
      name: "Elon Musk",
      url: "https://nypost.com/wp-content/uploads/sites/2/2021/12/elon-musk-senator-warren-joy-reid-feat-1-1.jpg?quality=80&strip=all&w=744",
    },
    {
      name: "Jeff Bezoz",
      url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142",
    },
  ]);

  const onSwipe = (direction, name) => {
    console.log(`You swiped ${direction} on ${name}.`);
  };

  const onCardLeftScreen = (name) => {
    console.log(`${name} left the screen!`);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => onSwipe(dir, person.name)}
            onCardLeftScreen={() => onCardLeftScreen(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
