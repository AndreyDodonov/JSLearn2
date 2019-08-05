const toggleMenu = () => {
    const menu = document.querySelector('menu');

    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.menu') || target.classList.contains('close-btn') ||
            target.closest('menu ul>li') ||
            (menu.classList.contains('active-menu'))) {
            menu.classList.toggle('active-menu');
        }
    });
};

export default toggleMenu;