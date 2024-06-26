const n1 = document.getElementById('numero1');
const n2 = document.getElementById('numero2');

function soma() {
    console.log('soma', parseFloat(n1.value)+parseFloat(n2.value));
}
//soma();

function diminuir(){
    console.log('diminuir', parseFloat(n1.value)-parseFloat(n2.value));
}

function multiplicar(){
console.log('multiplicar', parseFloat(n1.value)*parseFloat(n2.value));
}

function dividir(){
    if(parseFloat(n2.value) != 0){
        console.log('dividir', parseFloat(n1.value)/parseFloat(n2.value));
        } else {
            alert('Não pode ser feito a divisão por zero')
        }
}