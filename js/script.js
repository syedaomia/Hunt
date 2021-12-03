$(window).scroll(function () {

    $scrollamount = $(window).scrollTop();


    if ($scrollamount > 500) {
        $(".menu").addClass("sticky")
    } else {
        $(".menu").removeClass("sticky")
    }


    if ($scrollamount > 800) {
        $(".btop").fadeIn()
    } else {
        $(".btop").fadeOut()
    }


})



//banner-part js start

$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: true,
    prevArrow: '<i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


});

//banner-part js end

//about-part js start

$(".item2").mouseenter(function () {
    $(".img1").fadeOut();
    $(".img2").fadeIn();
})

$(".item2").mouseleave(function () {
    $(".img2").fadeOut();
    $(".img1").fadeIn();

})




$(".item3").mouseenter(function () {
    $(".img1").fadeOut();
    $(".img3").fadeIn();
})


$(".item3").mouseleave(function () {
    $(".img3").fadeOut();
    $(".img1").fadeIn();

})




$(".item4").mouseenter(function () {
    $(".img1").fadeOut();
    $(".img4").fadeIn();
})


$(".item4").mouseleave(function () {
    $(".img4").fadeOut();
    $(".img1").fadeIn();

})


//about-part js end


//port-part js start

$('.venobox').venobox();

//port-part js end

//service-part js start

$('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,

    vertical: true,


    centerMode: true,
    centerPadding: 0,

    arrows: true,
    prevArrow: '<i class="fa fa-arrow-circle-up pprev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-down nnext" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: 0

            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


});


//service-part js end



//testi-part js start

$('.testi-slider .left').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    vertical: true,


    centerMode: true,
    centerPadding: 0,

    arrows: true,
    prevArrow: '<i class="fa fa-arrow-circle-up tprev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-down tnext" aria-hidden="true"></i>',


    asNavFor: '.testi-slider .right',


});




$('.testi-slider .right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    asNavFor: '.testi-slider .left',
});





//testi-part js end




//count part js start
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


//count part js end
