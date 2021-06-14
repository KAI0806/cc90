$(function() {
  $('.faq-block:not(.is-open) .faq-block__body').hide();
  $(document).on('click', ".faq-block__ttl", function() {
      if(!$(this).parent().hasClass('is-open')){
          $(this).parent().addClass('is-open');
          $(this).next().slideDown(200);
      }else{
          $(this).parent().removeClass('is-open');
          $(this).next().slideUp(100);
      }
      return false;
  });
});
