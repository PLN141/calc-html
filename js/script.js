const n1 = document.getElementById('numero1');
const n2 = document.getElementById('numero2');
const resultado = document.getElementById('resultado');

function soma() {
    console.log('soma', parseFloat(n1.value) + parseFloat(n2.value));

    const valorCalculo = parseFloat(n1.value) + parseFloat(n2.value)

   // resultado.innerText = valorCalculo
   exibirResultado(valorCalculo)
}
//soma();

function diminuir() {
    console.log('diminuir', parseFloat(n1.value) - parseFloat(n2.value));

    const valorCalculo = parseFloat(n1.value) - parseFloat(n2.value)

    resultado.innerText = valorCalculo
}

function multiplicar() {
    console.log('multiplicar', parseFloat(n1.value) * parseFloat(n2.value));

    const valorCalculo = parseFloat(n1.value) * parseFloat(n2.value)

    resultado.innerText = valorCalculo
}

function dividir() {
    if (parseFloat(n2.value) != 0) {
        console.log('dividir', parseFloat(n1.value) / parseFloat(n2.value));
    } else {
        alert('Não pode ser feito a divisão por zero')
    }

    const valorCalculo = parseFloat(n1.value) / parseFloat(n2.value)

    resultado.innerText = valorCalculo
}

function exibirResultado(valorCalculo) {
    resultado.innerText = valorCalculo
}