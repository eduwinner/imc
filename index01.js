//declaração das variáveis
let peso;
let altura;
let imc;
let nomeUser = '';
let resultado;

//necessita prompt-sync para interagir com o usuário
const prompt = require('prompt-sync')();

//inicializando a variavel antes de utilizar
nomeUser = '';
while (nomeUser==''){
    nomeUser = prompt('Qual é o seu nome completo? ');
    console.log();
    if (nomeUser !== '') {
        console.log('Olá, ' + nomeUser + '!!!');
        console.log();
        } else {
            console.log('O seu nome completo precisa ser informado!!!');
            console.log();
            }
}
//inicializando a variavel antes de utilizar
peso=0;
while (peso==0){
    peso = prompt('Informe o seu peso em KG: ');
    peso = parseFloat(peso);
    if (peso !== '' && !isNaN(peso) && peso >0){
        console.log();
        }
    else {
        console.log('O seu peso precisa ser informado e não pode ser igual a zero!!!');
        console.log();
        peso=0;
    }
} 

//inicializando a variavel antes de utilizar
altura=0;
while (altura==0){
    altura = prompt('Informe a sua altura em metros: ');
    altura = parseFloat(altura);
    if (altura !== '' && !isNaN(altura) && altura >0){
        console.log();
        }
    else {
        console.log('A sua altura em metros deve ser informada e não pode ser zero');
        console.log();
        altura=0;
    }
} 

//Calculando o IMC
imc= peso/(Math.pow(altura,2));
if (imc<18.5){
    resultado='Abaixo do Peso';
}
else if (imc<25){
    resultado='com o Peso Normal';
}
else if (imc<30){
    resultado='Acima do Peso';
}
else if (imc<40){
    resultado='Obeso';
}
else{
    resultado='com Obesidade Grave';
}

console.log('Vamos calcular seu IMC e descobrir como você está');
console.log('');
// Vamos aguardar 10 segundos para criar um suspense
  setTimeout(() => {
  console.log('Calculando o seu IMC... Aguarde...')
  console.log()
}, 4000)
 setTimeout(() => {
  console.log('Aguarde só mais um instante...')
  console.log()
}, 8000)
 setTimeout(() => {
  console.log(nomeUser+', '+'seu IMC é: '+ imc.toFixed(2) + ' e você está ' + resultado);
}, 10000)
setTimeout(() => {
  console.log();
}, 11000)
