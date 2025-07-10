const personajes = [];

const formulario = document.getElementById("formulario");
const inputTexto = document.getElementById("input-texto");
const listaDiv = document.getElementById("lista");

const mostrarLista = () => {
    listaDiv.innerHTML = personajes.map(item => `<div class="tarjeta">${item}</div>`).join("");
    console.log("Lista actual de personajes:", personajes);
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = inputTexto.value.trim();

    if (texto === "") {
        console.log("Error: Por favor, introduce el nombre de un superhéroe.");
        return;
    }

    personajes.push(texto);
    inputTexto.value = "";

    mostrarLista();
});

listaDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("tarjeta")) {
        e.target.classList.toggle("seleccionada");
    
    if (e.target.classList.contains("seleccionada")){
        console.log(`tarjeta "${e.target.textContent}" seleccionada.`);
    } else {
        console.log(`tarjeta "${e.target.textContent}" seleccionada.`);
    }
}
});
mostrarLista();
