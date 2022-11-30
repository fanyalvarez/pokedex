const search = document.querySelector("#search");
const number = document.querySelector("#number");
const img = document.querySelector("#poke-img");
const types = document.querySelector("#types");
const type = document.querySelectorAll("#type");

const typeColors = {
  rock: [182, 158, 49],
  ghost: [112, 85, 155],
  steel: [183, 185, 208],
  water: [100, 147, 235],
  grass: [116, 203, 72],
  psychic: [251, 85, 132],
  ice: [154, 214, 223],
  dark: [117, 87, 76],
  fairy: [230, 158, 172],
  normal: [170, 166, 127],
  fighting: [193, 34, 57],
  flying: [168, 145, 236],
  poison: [164, 62, 158],
  ground: [222, 193, 107],
  bug: [167, 183, 35],
  fire: [245, 125, 49],
  electric: [249, 207, 48],
  dragon: [112, 55, 255],
};

const fetchApi = async (name) => {
  const pokemonName = name.split(" ").join("-");
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonName
  );

  if (response.status === 200) {
    const pokemonData = await response.json();
    return pokemonData;
  }
  return false;
};

search.addEventListener("change", async (event) => {
  const pokemonData = await fetchApi(event.target.value);
  // validation pokemon not exist
  if (!pokemonData) alert("Pokemon does not exist.");
  console.log(pokemonData);

  // # of pokemon
  number.innerHTML = "#" + pokemonData.id.toString().padStart(4, 0);

  // img of pokemon
  img.src = pokemonData.sprites.other.home.front_default;

  //   typess
  types.innerHTML = "";

  pokemonData.types.forEach((t) => {
    console.log(t.type.name);
    let newType = document.createElement("span");
    let bgColor = typeColors[t.type.name];

    newType.innerHTML = t.type.name;
    newType.classList.add("type");
    newType.style.backgroundColor = `rgb(${bgColor[0]} ${bgColor[1]} ${bgColor[2]})`;
    types.appendChild(newType);
  });

  //   base stats
  
});
