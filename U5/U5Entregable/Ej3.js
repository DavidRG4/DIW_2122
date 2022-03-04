let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let pokemons = [];
window.onload = inicio;
function inicio() {
  generarpokemon();
}
function generarpokemon() {
  for (let i = 0; i <= 12; i++) {
    number = Math.floor(Math.random() * (899 - 1) + 1);
    console.log(number);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (
        xhr.readyState === READY_STATE_COMPLETE &&
        xhr.status === HTTP_STATUS_OK
      ) {
        let data = JSON.parse(xhr.responseText);
        procesar_respuesta(data);
      }
    };
    url = "https://pokeapi.co/api/v2/pokemon/" + number;
    xhr.open("GET", url);
    xhr.send();
  }
}
function procesar_respuesta(pokemon) {
  contenedor = document.getElementById("contenedor");
  card = document.createElement("div");
  card_panel = document.createElement("div");
  card_title = document.createElement("div");
  img = document.createElement("img");
  nombre = document.createElement("h5");
  number = document.createElement("h6");

  card.setAttribute("class", "col s12");
  card_panel.setAttribute("class", "card-panel center blue");
  card.appendChild(card_panel);
  card_title.setAttribute("class", "card-title");
  card_panel.appendChild(card_title);
  img.setAttribute("class", "responsive-img");
  img.setAttribute("src", pokemon.sprites.front_default);
  img.setAttribute("alt", pokemon.name);
  card_title.appendChild(img);
  nombre.innerHTML = pokemon.name;
  card_panel.appendChild(nombre);
  number.innerHTML = "Numero Pokedex #" + pokemon.id;
  card_panel.appendChild(number);
  for (let i = 0; i < pokemon.types.length; i++) {
    type = document.createElement("p");
    type.innerHTML = pokemon.types[i].type.name;
    card_panel.appendChild(type);
  }
  contenedor.appendChild(card);
}
