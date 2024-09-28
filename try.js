document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Menu';
    toggleButton.classList.add('menu-toggle');

   
    nav.parentNode.insertBefore(toggleButton, nav);

   
    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('nav-open');
    });

  
    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !toggleButton.contains(e.target)) {
            nav.classList.remove('nav-open');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('nav-open');
        }
    });
});