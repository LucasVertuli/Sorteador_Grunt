document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-Sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio) + 1;
        document.getElementById('Resultado-Value').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    } )
})