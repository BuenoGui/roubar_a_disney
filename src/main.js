document.addEventListener('DOMContenLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-buttons]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            console.log(botao);
        })
    }
})