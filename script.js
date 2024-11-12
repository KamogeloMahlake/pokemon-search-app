const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonType = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const divImg = document.querySelector(".img")

const cleanName = name => {
    return name.trim().replace(/[^A-Za-z0-9]/g, "").toLowerCase()

}

const fetchData = async () => {
    try {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${cleanName(searchInput.value)}`);
        const data = await res.json();
        console
        const {id, height, name, stats, weight, types, sprites} = data;
        pokemonWeight.textContent = weight;
        pokemonName.innerHTML = `<strong>${name.toUpperCase()}</strong>`;
        pokemonId.textContent = id;
        pokemonHeight.textContent = height;
        divImg.innerHTML = `<img src="${sprites["front_default"]}" id="sprite" alt="image of ${name}">`
        
        for (let i = 0; i < types.length; i++) {
            pokemonType.innerHTML += `<span>${types[i].type.name}</span>`
        }
        stats.forEach(el => {
            switch(el.stat.name) {
                case "hp":
                    hp.textContent = el["base_stat"];
                    break;
                case "attack":
                    attack.textContent = el["base_stat"];
                    break;
                case "defense":
                    defense.textContent = el["base_stat"];
                    break;
                case "special-attack":
                    specialAttack.textContent = el["base_stat"];
                    break;
                case "special-defense":
                    specialDefense.textContent = el["base_stat"];
                    break;
                case "speed":
                    speed.textContent = el["base_stat"];
                    break;
                default:
                    break;
            }
        })
    } catch (error) {
        alert("Pokémon not found")
    }
};
fetchData()
searchButton.addEventListener("click", ()=> {
pokemonType.innerHTML = "";
fetchData();
});