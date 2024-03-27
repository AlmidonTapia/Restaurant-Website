// Home carousel
$('.home-carousel').owlCarousel({
    loop:true,
    margin: 0,
    dots: false,
    autoplay: true,
    autoplayTimeout:7000,
    animateOut: 'fadeOut',
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// Navbar
window.addEventListener ('scroll', function() {
    let navbar = document.querySelector('.navbar');
    //toggles foxed class to navbar on scroll
    navbar.classList.toggle('fixed', this.window.scrollY > 0);
})
//Nav buttons
let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.carbtn');
let darkbtn = document.querySelector('.darkbtn');
let signImg = document.getElementById('signImg');

menuBtn.onclick = function() {
    //togle active class in Nav items on click
    document.getElementById('nav-items').classList.toggle('active');
        //changes icon onclick
    if (document.getElementById("nav-items").classList.contains('active')) {
        menuBtn.classList.remove("bx-menu");
        menuBtn.classList.add("bx-x");
    }else{
        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu");
    }
}

searchBtn.onclick = function() {
    //togle active class in search form on click
    document.getElementById('search-form').classList.toggle('active');
        //changes icon onclick
    if (document.getElementById("search-form").classList.contains('active')) {
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    }else{
        searchBtn.classList.remove("bx-x");
        searchBtn.classList.add("bx-search-alt-2");
    }
}

cartBtn.onclick = function() {
    //togle active class in cart on click
    document.getElementById("cart").classList.toggle('active');
        //changes icon onclick
    if (document.getElementById("cart").classList.contains('active')) {
        cartBtn.classList.remove("bx-cart");
        cartBtn.classList.add("bx-x");
    }else{
        cartBtn.classList.remove("bx-x");
        cartBtn.classList.add("bx-cart");
    }
}

darkbtn.onclick = function() {
    //togle active class dark-mode on click
    document.body.classList.toggle('dark-mode');
        //if body contains dark mode class
    if (document.body.classList.contains('dark-mode')) {
    
        //change dark mode mode button icon to sun
        darkbtn.classList.remove("bx-moon");
        darkbtn.classList.add("bx-sun");
        
        //change signImg for dark
        signImg.src = '/Images/sign/sign-dark.png';
        
    }else{
        //change dark mode mode button icon to moon
        darkbtn.classList.remove("bx-sun");
        darkbtn.classList.add("bx-moon");
        
        //change signImg for light
        signImg.src = '/Images/sign/sign-light.png';
    }
}
//Menu-Section
let menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function(e){
    //if clicked tab does not contains active class 
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){
        //gets data atribute
        const target = e.target.getAttribute("data-target");
        
        //remove active class from active tab
        menuTabs.querySelector('.active').classList.remove('active');
        
        //ADD active class from clicked tab
        e.target.classList.add('active');
        
        let menuSection = document.querySelector('.menu-section');
        //remove show class from active tab content
        menuSection.querySelector('.menu-tab-content.show').classList.remove('show');
        // adds show class from active tab content
        menuSection.querySelector(target).classList.add("show");
    }
    //if clicked tab contains active class
    else{
        return //returns nothing
    }
})
// events
$('.events-carousel').owlCarousel({
    loop:true,
    margin: 30,
    dots: true,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
// team
$('.team-carousel').owlCarousel({
    loop:true,
    margin: 20,
    dots: true,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
//Testimonial
$('.review-carousel').owlCarousel({
    loop:true,
    margin: 20,
    dots: false,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
//Blog
$('.blog-carousel').owlCarousel({
    loop:true,
    margin: 20,
    dots: false,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})