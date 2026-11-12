
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');


// MENÚ DE NAVEGACIÓN
if (menuButton && navigation) {

    menuButton.addEventListener('click', () => {

        const isOpen = navigation.classList.toggle('open');

        menuButton.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

        menuButton.setAttribute(
            'aria-label',
            isOpen ? 'Cerrar menú' : 'Abrir menú'
        );

    });


    // CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
    navigation.querySelectorAll('a').forEach((link) => {

        link.addEventListener('click', () => {

            navigation.classList.remove('open');

            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );

            menuButton.setAttribute(
                'aria-label',
                'Abrir menú'
            );

        });

    });

}


// BOTÓN VOLVER AL INICIO
const backToTop = document.querySelector('#backToTop');

if (backToTop) {

    backToTop.addEventListener('click', (event) => {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}
