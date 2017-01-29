$('.bar a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top 
  }, 1000);
  return false;
});

$('.bar a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top 
  }, 1000);
  return false;
});


$('#backToTop').click(function () {
  $('body').animate({
    scrollTop: 0
  }, 1000, function(){
    $('#backToTop').removeClass('show');
  $('#backToTop').addClass('hidden');
  });
   return false;
});

$(window).scroll(function() {
    $('#backToTop').removeClass('hidden');
  $('#backToTop').addClass('show');
});

$("#burger").click(function(){
  $(".bar").toggleClass("show");
});