var typed = new Typed('#element', {

    strings: [
        'I am Larry Daniels',
        'I am designer.',
        'I am Developer.'],
    typeSpeed: 150,
    backSpeed:100,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
  });



  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    
        autoplay:true,
        loop:true,
        margin:20,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true,
            center:true
        },
       
    }
    });
  });