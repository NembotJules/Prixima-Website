

$(document).ready(function(){
    //Slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        smartSpeed: 1000, 
        dots:false, 
        navText:['PREV', 'NEXT'], 
        responsive:{
            0:{
                nav:false,
            },

            768:{
               nav:true, 
            },
            1000:{
                
            }
        }
    })
    // Project Slider
    $('#project-slider').owlCarousel({
        loop:true,
        margin:24,
        nav:true,  
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000, 
        dots:true,   
        responsive:{
            0:{
               items: 1,
                
            },

            768:{
               items: 2,
                
            },
            1140:{
                items:2,
                center: true, 
            }
        }
    })

    $('#reviews-slider').owlCarousel({
        loop:true, 
        margin: 0, 
        nav:false,
        items:1,
        smartSpeed: 800,
    })

})