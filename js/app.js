const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

navigation = () => {
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('hamburger-line');
    });
};

navigation();