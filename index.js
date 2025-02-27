function opcaoSelecionada(val) {
    if (val === "soma") {
        Soma();
    } else if (val === "subtração") {
        Subtração();
    } else if (val === "multiplicação") {
        Multiplicação();
    } else if (val === "divisão") {
        Divisão();
    }
}

function Soma() {
    let num1 = Number.parseInt(document.getElementById("numero1").value);
    let num2 = Number.parseInt(document.getElementById("numero2").value);

    let soma = num1 + num2;
    document.getElementById("resposta").textContent = "Resultado: " + soma;
}

function Subtração() {
    let num1 = Number.parseInt(document.getElementById("numero1").value);
    let num2 = Number.parseInt(document.getElementById("numero2").value);

    let subtração = num1 - num2;
    document.getElementById("resposta").textContent = "Resultado: " + subtração;
}

function Multiplicação() {
    let num1 = Number.parseInt(document.getElementById("numero1").value);
    let num2 = Number.parseInt(document.getElementById("numero2").value);

    let multiplicação = num1 * num2;
    document.getElementById("resposta").textContent = "Resultado: " + multiplicação;
}

function Divisão() {
    let num1 = Number.parseInt(document.getElementById("numero1").value);
    let num2 = Number.parseInt(document.getElementById("numero2").value);

    if (num2 === 0) {
        document.getElementById("resposta").textContent = "Erro: Divisão por zero.";
    } else {
        let divisão = num1 / num2;
        document.getElementById("resposta").textContent = "Resultado: " + divisão;
    }
}
