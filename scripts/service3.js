const ativos = ["ativo1", "ativo2", "ativo3", "ativo4", "ativo5", "ativo6", "ativo7", "ativo8", "ativo9", "ativo10"];
const seletorAtivos = document.getElementById("seletorAtivos");

for(let i = 0; i < ativos.length; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    option.text = ativos[i];
    seletorAtivos.appendChild(option);
}

const meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const seletorMeses = document.getElementById("seletorMeses");

for(let i = 0; i < meses.length; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    option.text = meses[i];
    seletorMeses.appendChild(option);
}
