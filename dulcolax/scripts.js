document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const carrossel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.carrossel-item');
    const prevButton = document.querySelector('.carrossel-prev');
    const nextButton = document.querySelector('.carrossel-next');

    let currentIndex = 0;

    
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove a classe 'active' de todos os itens
            menuItems.forEach(i => i.classList.remove('active'));

            // Adiciona a classe 'active' ao item clicado
            item.classList.add('active');
        });
    });
    
    
    // scripts.js


    function updateCarrossel() {
        const offset = -currentIndex * 100;
        carrossel.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarrossel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarrossel();
    });

    updateCarrossel();

});

document.addEventListener('DOMContentLoaded', () => {
    const mobile = document.querySelector('.mobile');
    const nav = document.querySelector('.menu');

    mobile.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        mobile.classList.toggle('toggle');
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.linguagem a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

