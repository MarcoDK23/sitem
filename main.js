function sim(){
    location.href = "https://www.youtube.com/watch?v=7w4sAK_eMSY"
    alert("Seu cu e meu!!");
}
function desvia(t){
var btn = t;
btn.style.position = 'absolute';
btn.style.bottom = geraposicao(10, 90);
btn.style.left = geraposicao(10, 90);
console.log("Opa, desviei...");
}

function geraposicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}