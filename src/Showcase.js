import pkImg from "./images/bulbasaur.jpg";

function Showcase() {
  let favPokemon = "Bulbasaur";
  let pokeCharacteristics = {
    type: "Grass",
    move: "View Whip"
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={pkImg} alt={favPokemon} style={{ width: 200, height: 200 }} />
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        is and one of their moves is{" "}
        <span style={{ backgroundColor: 0xffffff, color: 0x00ff00 }}>
          {pokeCharacteristics.move}
        </span>
        .
      </h2>
    </div>
  );
}

export default Showcase;
