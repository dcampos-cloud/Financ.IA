const ativos = [
  "TGAR11.SA",
  "VGIR11.SA",
  "MXRF11.SA",
  "HGLG11.SA",
  "IRDM11.SA",
  "BRCR11.SA",
  "BTLG11.SA",
  "XPML11.SA",
  "KNCR11.SA",
  "KNIP11.SA",
];
const seletorAtivos = document.getElementById("seletorAtivos");

for (let i = 0; i < ativos.length; i++) {
  const option = document.createElement("option");
  option.value = i + 1;
  option.text = ativos[i];
  seletorAtivos.appendChild(option);
}

const resultado = document.getElementById("resultado");

btnEnviar.addEventListener("click", function (e) {
  e.preventDefault();
  const select_ativos = seletorAtivos.options[seletorAtivos.selectedIndex].text;
  console.log(select_ativos);
  enviar_dados(select_ativos);
});

function enviar_dados(ativo) {
  const dados = {
    ativo_select: ativo
  };

  let url = "http://127.0.0.1:5000/api/venda_futura";
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
    redirect: "manual",
  })
    .then((Response) => Response.json())
    .then((data) => {
      resultado.innerHTML = `<div class="mb-3 centered-text"><h2>Data: ${data.date_max}</h2><h2>Valor: ${data.max_value}</h2></div>`;
    })
    .catch((e) => {
      console.log("Erro " + e);
    });
}
