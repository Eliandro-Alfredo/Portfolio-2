let tela_menu = document.getElementById('tela-menu');

function manipular_menu(estado) {
    if (estado == 'aberto') {
        tela_menu.style.display = 'flex';
    }else {
        tela_menu.style.display = 'none';
    }
}