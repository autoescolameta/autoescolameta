const home = document.getElementById("home");
const sobre = document.getElementById("sobres");
const plano = document.getElementById("plano");
const buttonok = document.getElementById("ok");
const Mensagem = document.getElementById("mensagemAviso");

buttonok.addEventListener("click", () =>{
    Mensagem.style.display = "none"
})

home.classList.add("home")

sobre.addEventListener("click", () =>{
    sobre.classList.add("sobre1")
    home.classList.remove("home")
    plano.classList.remove("plano")
})
sobre.addEventListener("click", () =>{
    sobre.classList.add("sobre1")
    home.classList.remove("home")
    plano.classList.remove("plano")
})
plano.addEventListener("click", () =>{
    sobre.classList.remove("sobre1")
    home.classList.remove("home")
    plano.classList.add("plano")
})

home.addEventListener("click", () =>{
    sobre.classList.remove("sobres")
    home.classList.add("home")
    plano.classList.remove("plano")
})