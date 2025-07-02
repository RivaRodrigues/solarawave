// Aguarda o conteúdo do DOM ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. FUNCIONALIDADE DO MENU HAMBÚRGUER PARA MOBILE
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    hamburgerMenu.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar/esconder o menu de navegação
        mainNav.classList.toggle('active');
    });

    // Fecha o menu mobile quando um link é clicado
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });


    // 2. FUNCIONALIDADE DO BANNER DE COOKIES
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // Verifica no armazenamento local se os cookies já foram aceitos
    if (!localStorage.getItem('cookiesAccepted')) {
        // Se não foram aceitos, exibe o banner
        cookieBanner.style.display = 'block';
    }

    acceptCookiesButton.addEventListener('click', () => {
        // Armazena a informação de que os cookies foram aceitos
        localStorage.setItem('cookiesAccepted', 'true');
        // Esconde o banner com uma transição suave
        cookieBanner.style.transition = 'opacity 0.5s ease';
        cookieBanner.style.opacity = '0';
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 500); // Tempo da transição
    });

});