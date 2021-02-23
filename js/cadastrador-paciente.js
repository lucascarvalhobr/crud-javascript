function cadastrarNovoPaciente() {

    var tBody = document.querySelector('#tabela-pacientes');

    var { nome, peso, altura, gordura, imc } = obterDadosPaciente();

    construirLinha();

    function construirLinha() {
        let novaLinha = tBody.insertRow(tBody.length);

        var celulaNome = novaLinha.insertCell(0);
        celulaNome.textContent = nome;

        var celulaPeso = novaLinha.insertCell(1);
        celulaPeso.textContent = peso;

        var celulaAltura = novaLinha.insertCell(2);
        celulaAltura.textContent = altura;

        var celulaGordura = novaLinha.insertCell(3);
        celulaGordura.textContent = gordura;

        var celulaImc = novaLinha.insertCell(4);
        celulaImc.textContent = imc;
    }

    function obterDadosPaciente() {
        var nome = document.querySelector('#nomeInput').value;
        var peso = document.querySelector('#pesoInput').value;
        var altura = document.querySelector('#alturaInput').value;
        var gordura = document.querySelector('#gorduraInput').value;
        var imc = calculaImc(peso, altura);
        return { nome, peso, altura, gordura, imc };
    }
}

document.getElementById('adicionar-paciente').addEventListener('click', function (event) {
    event.preventDefault(); //previne comportamento padrão do botão, que é o submit e recarregar página
    cadastrarNovoPaciente();
});
