$(function() {
// sp rader slider
    function sliderStart(){
      $slider = $('.sec0104__block-sp');
      $slider.slick({
          prevArrow: '<div class="slider-prev">&nbsp;</div>',
          nextArrow: '<div class="slider-next">&nbsp;</div>',
          focusOnSelect: false,
          infinite:true,
          initialSlide:4,
          autoplay:true,
          dots:true,
          draggable:false,
          swipe: true,
          vertical: false,
          autoplaySpeed:1000,
          speed:500,
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover:false,
          pauseOnFocus:true,
          pauseOnDotsHover:false,
          centerMode: true,
          centerPadding:'30px',
          cssEase:'ease-in'
      })
      .on('beforeChange',function(event, slick, currentSlide, nextSlide){
        if(nextSlide = 1 ) {
          $slider.slick('slickSetOption', 'autoplaySpeed', 4000, true)
        }
      })
      .on('afterChange', function() {
          var _self = $(this);
          var viewNum = _self.slick('slickCurrentSlide') ;
          $slider.find('.slick-slide').removeClass('is-view');
          var radar001sp = document.getElementById('radar001sp').getSVGDocument();
          var radar002sp = document.getElementById('radar002sp').getSVGDocument();
          var radar003sp = document.getElementById('radar003sp').getSVGDocument();
          var radar004sp = document.getElementById('radar004sp').getSVGDocument();
          var radar005sp = document.getElementById('radar005sp').getSVGDocument();
          var radar001spa = radar001sp.getElementById("animation");
          var radar002spa = radar002sp.getElementById("animation");
          var radar003spa = radar003sp.getElementById("animation");
          var radar004spa = radar004sp.getElementById("animation");
          var radar005spa = radar005sp.getElementById("animation");
          radar001spa.style.opacity = '0';
          radar002spa.style.opacity = '0';
          radar003spa.style.opacity = '0';
          radar004spa.style.opacity = '0';
          radar005spa.style.opacity = '0';
          if(viewNum == 1){
            radar001spa.classList.remove('is-start-sp');
            radar002spa.classList.add('is-start-sp');
            radar003spa.classList.remove('is-start-sp');
            radar004spa.classList.remove('is-start-sp');
            radar005spa.classList.remove('is-start-sp');
          }else if(viewNum == 2){
            radar001spa.classList.remove('is-start-sp');
            radar002spa.classList.remove('is-start-sp');
            radar003spa.classList.add('is-start-sp');
            radar004spa.classList.remove('is-start-sp');
            radar005spa.classList.remove('is-start-sp');
          }else if(viewNum == 3){
            radar001spa.classList.remove('is-start-sp');
            radar002spa.classList.remove('is-start-sp');
            radar003spa.classList.remove('is-start-sp');
            radar004spa.classList.add('is-start-sp');
            radar005spa.classList.remove('is-start-sp');
          }else if(viewNum == 4){
            radar001spa.classList.remove('is-start-sp');
            radar002spa.classList.remove('is-start-sp');
            radar003spa.classList.remove('is-start-sp');
            radar004spa.classList.remove('is-start-sp');
            radar005spa.classList.add('is-start-sp');
          }else{
            radar001spa.classList.add('is-start-sp');
            radar002spa.classList.remove('is-start-sp');
            radar003spa.classList.remove('is-start-sp');
            radar004spa.classList.remove('is-start-sp');
            radar005spa.classList.remove('is-start-sp');
          }
      });
    }
    if ($('#container').css('min-width') != '738px') {
      sliderStart();
    }

//pc rader
    $('.sec0104 .inview-triger').on('inview', function(event, isInView) {
        if (isInView) {
          $('.sec0104__block-pc').addClass('inview-on');
          if ($('#container').css('min-width') == '738px') {
          var radar001 = document.getElementById('radar001pc').getSVGDocument();
          var radar001a = radar001.getElementById("animation");
          radar001a.classList.add('is-start-pc');
          var radar002 = document.getElementById('radar002pc').getSVGDocument();
          var radar002a = radar002.getElementById("animation");
          radar002a.classList.add('is-start-pc');
          var radar003 = document.getElementById('radar003pc').getSVGDocument();
          var radar003a = radar003.getElementById("animation");
          radar003a.classList.add('is-start-pc');
          var radar004 = document.getElementById('radar004pc').getSVGDocument();
          var radar004a = radar004.getElementById("animation");
          radar004a.classList.add('is-start-pc');
          var radar005 = document.getElementById('radar005pc').getSVGDocument();
          var radar005a = radar005.getElementById("animation");
          radar005a.classList.add('is-start-pc');
          }
        }
    });

});



