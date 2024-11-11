let tela = "";
let operador = "";
let resultAnterior = "";

function atualizarTela() {
    document.getElementById('resultado').innerText = tela || '0';
}

function adicionarNumero(numero) {
    if (tela.length < 10) {
        tela += numero;
        atualizarTela();
    }
}

function calcular() {
    if (resultAnterior && tela) {
        let num1 = parseFloat(resultAnterior);
        let num2 = parseFloat(tela);
        let resultado = 0;

        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num2 !== 0 ? num1 / num2 : "Erro";
                break;
        }

        tela = resultado.toString().substring(0, 10);  // limitar a 10 caracteres
        operador = "";
        resultAnterior = "";
        atualizarTela();
    }
}

function operacao(op) {
    if (tela) {
        resultAnterior = tela;
        operador = op;
        tela = "";
    }
}

function deletar() {
    tela = tela.slice(0, -1);
    atualizarTela();
}

function limpar() {
    tela = "";
    operador = "";
    resultAnterior = "";
    atualizarTela();
}
