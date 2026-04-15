function add(caractere) {
    const visor = document.getElementById('visor');
    visor.value += caractere;
}

function limpar() {
    document.getElementById('visor').value = "";
}

function apagar() {
    const visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1);
}

function calcular() {
    const visor = document.getElementById('visor');
    try {
        // eval resolve a conta que estiver escrita no visor
        visor.value = eval(visor.value);
    } catch (e) {
        visor.value = "Erro";
    }
}