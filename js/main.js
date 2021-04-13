$(function(){
    $('.img__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        fade:true,
    });
    const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}
// $(window).resize(function () {
//     if($(window).width() >= 620){
//         $('.menu-icon-active').removeClass('menu-icon-active');
//     };
// })

});
