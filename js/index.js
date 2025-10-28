function buttonTipo(tipos){
    let buttons = "";
    tipos.forEach((value, index) =>{
        let name = getTipo(value.type.name);
        buttons += `<button class="btn btn-${name} text-white">${name}</button>`;
    });
    return buttons;
}

async function loadPokemons() {
    if()
}