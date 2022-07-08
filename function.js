
var navBtn = document.querySelector('#nav-btn');
var navBar = document.querySelector('#nav');

navBtn.onclick = () =>{
    navBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

//  customization the heading section
window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header-section').classList.add('active');
        document.querySelector('.first-logo').style.display= "none"
        document.querySelector('.sencond-logo').style.display= "inline-block"

    }else{
        document.querySelector('.header-section').classList.remove('active');
        document.querySelector('.first-logo').style.display= "inline-block"
        document.querySelector('.sencond-logo').style.display= "none"
    }
    
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
// owl carousel seciton for testimonials

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:3
        }
    }
})

