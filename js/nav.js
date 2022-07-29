// DOM JS NAV A
const activepage = window.location.pathname;
const navLinks = document.querySelectorAll('#navbar a').forEach(link => {
    if(link.href.includes(`${activepage}`)){
        link.classList.add('active');
    }
})







