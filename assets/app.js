
// iniciar conteo
let contabilizador = 0;

// seleccionar valores y botones
const valor = document.querySelector('#value');
const botones = document.querySelectorAll('.btn');

// recorrer botones 

botones.forEach(function (e){
    e.addEventListener('click', function (evento) {
        const estilos = evento.currentTarget.classList;
        if (estilos.contains('decrecer')) {
            contabilizador--;
        } else if (estilos.contains('aumentar')) {
            contabilizador++;
        } else {
            contabilizador = 0;
        }
        if (contabilizador < 0) {
            valor.style.color = 'red';
        }
        if (contabilizador === 0) {
            valor.style.color = 'black';
        }
        if (contabilizador > 0) {
            valor.style.color = '#f9a81a';
        }
        if (contabilizador >= 10) {
            valor.style.color = '#d4f91a';
        }
        if (contabilizador >= 20) {
            valor.style.color = '#50f91a';
        }
        if (contabilizador >= 30) {
            valor.style.color = '#1af97c';
        }
        if (contabilizador >= 40) {
            valor.style.color = '#1aeff9';
        }
        if (contabilizador >= 50) {
            valor.style.color = '#1a35f9';
        }
        valor.textContent = contabilizador;
});
});