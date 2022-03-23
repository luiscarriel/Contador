const btnIncrementar = document.getElementById("btn_incrementar");
const p = document.getElementById("contador");

let contador = 0;
p.innerHTML = contador;

btnIncrementar.addEventListener("click", function(){
    p.innerHTML = ++contador;
    console.log("+1")
});

// Made another way easier

function btnDecrementar(){
    p.innerHTML = --contador;
    console.log("-1")
};

function btnZerar(){
    p.innerHTML = contador = 0;
    alert("Zerou")
    console.log("Zerou")
};