$(function() {
/* --------------------------------------------------------------
btnMenu
-------------------------------------------------------------- */
    var cy = 0;//クリック前の位置
    $(document).on('click', ".menu__item-triger:not(.is-load)", function() {
        if(!$('#menu').hasClass('is-open')){
            cy = $( window ).scrollTop();
            setTimeout(function(){
                $('#container').addClass('is-open');
            },400);
            $('#menu').removeClass('is-close');
            $('#menu').addClass('is-open');
        }else{
            $('#container').removeClass('is-open');
            $('#menu').removeClass('is-open');
            $('#menu').addClass('is-close');
            if($("body").css('min-width') == '320px'){
              $( 'html, body' ).prop({scrollTop:cy});
            }
        }
        return false;
    });
    $(document).on('click', ".menu__item-list a.is-triger", function() {
        if(!$('#menu').hasClass('is-open')){
            $('#container').addClass('is-open');
            $('#menu').addClass('is-open');
        }else{
            $('#container').removeClass('is-open');
            $('#menu').removeClass('is-open');
            $('#menu').addClass('is-close');
        }
    });
 
});
