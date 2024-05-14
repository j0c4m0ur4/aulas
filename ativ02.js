var peso = Number(prompt("Digite seu peso:"))

var altura = Number(prompt("Digite seu altura:"))

var imc = peso/(altura**2)

if(imc <= 18.4){
    console.log("Abaixo do peso")
}
else if(imc >= 18.5 && imc <= 24.9){
    console.log("Peso Normal")
}
else {
    console.log("Acima do Peso")
}
