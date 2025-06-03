function buscarPoke() {
    const inputPoke = document.getElementById("input_poke");
    const nomePoke = inputPoke.value;
    console.log("buscando " + nomePoke);

    fetch("https://pokeapi.co/api/v2/pokemon/" + nomePoke)
        .then((resposta) => {
            // Converte a resposta da API em JSON
            return resposta.json();
        })
        .then((json) => {
            // Mostra no console o JSON recebido da API
            console.log(json);

            // Preenche os campos do formulário com os dados recebidos

            const pokeNumber = document.getElementById("poke_number").innerHTML = "#"+ json.id;
            const pokeName = document.getElementById("poke_name").innerHTML = json.name;
            const pokeType = document.getElementById("poke_type").innerText = json.types.map(t => t.type.name).join(', ');
            const pokeSpecie = document.getElementById("poke_ability").innerHTML = json.abilities.map(a => a.ability.name).join(', ');

            const pokeSpriteNormal = document.getElementById("poke_spriteNormal");
            const spriteUrlNormal = json.sprites.front_default; // ← aqui está a correção
            pokeSpriteNormal.src = spriteUrlNormal;

            const pokeSpriteShiny = document.getElementById("poke_spriteShiny");
            const spriteUrlShiny = json.sprites.front_shiny;
            pokeSpriteShiny.src = spriteUrlShiny;

        });
}


function configEvento() {
    const InputPoke = document.getElementById("input_poke");
    const botaoBuscar = document.getElementById("botao_buscar");
    botaoBuscar.addEventListener("click", buscarPoke);
}

window.addEventListener("load", configEvento);