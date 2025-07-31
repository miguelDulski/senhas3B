const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll ('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha --;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha()
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha ++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha= document.querySelector('#campo-senha')
const checkbox = document.querySelectorAll(".checkbox")

for (i = 0; i <checkbox.length; i++){
    checkbox[i].onclick =geraSenha;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMaiusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '1234567890';
const simbolos = '@#*&%$';

geraSenha();
function geraSenha(){
    let alfabeto = '';
    if (checkbox [0] . checkbox) {
        alfabeto = alfabeto + letrasMaiusculas
    }
function geraSenha(){
    let alfabeto = '';
    if (checkbox [1] . checkbox) {
        alfabeto = alfabeto + letrasMinuculas
    }
function geraSenha(){
    let alfabeto = '';
    if (checkbox [2] . checkbox) {
        alfabeto = alfabeto + numeros
    }
function geraSenha(){
    let alfabeto = '';
    if (checkbox [3] . checkbox) {
        alfabeto = alfabeto + simbolos
    }

    let senha = '';
    for (let i = 0; i <tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
}