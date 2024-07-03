document.addEventListener('DOMContentLoaded', (event) => {
    const $html = document.querySelector('html');
    const $checkbox = document.querySelector('#toggle');

    $checkbox.addEventListener('change', function() {
        $html.classList.toggle('dark-mode');
        var modeSpan = document.getElementById('modeText');
        var imagem = document.getElementById('logo-abbr');
            
    if (modeSpan.textContent === 'dark_mode') {
        modeSpan.textContent = 'light_mode';
        modeSpan.classList.add('light-mode');
        imagem.src = 'images/ion/viveo.png';
       
    } else {
        modeSpan.textContent = 'dark_mode';
        modeSpan.classList.remove('light-mode');
        imagem.src = 'images/ion/viveo-logo-1.png';
        
    }
    });
});


