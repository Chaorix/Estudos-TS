let usuarios = [
    "Maria",
    "João",
    "Pedro",
    "Ana",
    "Paula",
    "Carlos",
    "Antônio",
    "Matheus",
    "Thiago"
]

function carregarUsers() {
    document.getElementById("lista").innerHTML = "";
    document.getElementById("input").value = "";

    for (let i = 0; i < usuarios.length; i++) {
        document.getElementById("lista").innerHTML += `<li class="list-group-item">${usuarios[i]}</li>`;
    };
};

function pesquisarUser() {
    let input = document.getElementById("input").value;
    let inputLimpo = input.trim().toUpperCase();

    document.getElementById("lista").innerHTML = "";

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].toUpperCase().includes(inputLimpo)) {
            document.getElementById("lista").innerHTML += `<li class="list-group-item">${usuarios[i]}</li>`;
        }
    }
}