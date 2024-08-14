/* Menu */
const navMenu = document.getElementById('navMenu'),
      navToggle = document.getElementById('navToggle'),
      navClose = document.getElementById('navClose');

//Open
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
};

//Close
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};

//Remove Menu after Clicking Link
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

//Swiper
const swiperFavourites = new Swiper('.favourites-swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 1,
    centeredSlides: 'auto',
});

//Scroll Up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

//Active link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach ( current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionID = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav-menu a[href*=' + sectionID + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    });
};
window.addEventListener('scroll', scrollActive);

//Scroll Animations
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true,
})

sr.reveal('.home-info, .contact-container');
sr.reveal('.home-images', {delay: 1000, origin: 'right'});
sr.reveal('.favourites-swiper', {delay: 500, origin: 'left', interval: 100});