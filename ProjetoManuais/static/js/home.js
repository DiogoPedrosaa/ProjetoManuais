
/* Script para a barra de pesquisa */
$(document).ready(function () {
    $('#pesquisaInput').on('input', function () {
        var termoPesquisa = $(this).val().toLowerCase();
        $('#blocosContainer .card').each(function () {
            var textoBloco = $(this).text().toLowerCase();
            if (textoBloco.includes(termoPesquisa)) {
                $(this).parent().show();
            } else {
                $(this).parent().hide();
            }
        });
    });
});





/* Script para o efeito de digitação no titulo ''Fluxogramas" */
$(document).ready(function () {
    var titleText = "FLUXOGRAMAS"; 
    var titleElement = $(".custom-title"); 
    var speed = 450; 

    function typeWriterEffect(text, index) {
        if (index < text.length) {
            // Se ainda estiver digitando, atualize o texto sem o cursor visível
            titleElement.text(text.substring(0, index + 1));

            setTimeout(function () {
                typeWriterEffect(text, index + 1);
            }, speed);
        } else {
            // Quando a frase estiver totalmente digitada, faça o cursor piscar
            setInterval(function () {
                titleElement.toggleClass("cursor-visible");
            }, 500); 
        }
    }

    // Inicie o efeito quando a página estiver carregada
    typeWriterEffect(titleText, 0);
});
