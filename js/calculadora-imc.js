function calculaImc(infoPeso, infoAltura) {
    return infoPeso / (infoAltura * infoAltura);
}

function preencherTabelaComImc() {
    var tBody = document.querySelector('#tabela-pacientes');

    var trsBody = tBody.getElementsByClassName('paciente')

    for (i = 0; i < trsBody.length; i++) {

        var tr = trsBody[i];

        var infoPeso = tr.querySelector('.info-peso').textContent;
        var infoAltura = tr.querySelector('.info-altura').textContent;

        var colunaImc = tr.querySelector('.info-imc');

        if (!ValidarPesoAndAltura()) {

            tr.classList.add('campo-invalido');
            
            continue;
        }

        var imc = calculaImc(infoPeso, infoAltura)

        tr.querySelector('.info-imc').textContent = imc;
    }

    function ValidarPesoAndAltura() {
        if (infoPeso <= 0) {
            colunaImc.textContent = 'Peso inválido!';

            return false;
        }

        if (infoAltura >= 3) {
            colunaImc.textContent = 'Altura inválida!';

            return false;
        }

        return true;
    }
}

preencherTabelaComImc();


