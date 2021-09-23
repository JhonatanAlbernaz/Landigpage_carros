$('#titulo').fadeIn(4000);

$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if(scroll > 200){
    $('#carro').fadeIn(1000);

    $('#carro').animate({left: '70px'}, function(){
      $('#texto-carro').fadeIn(1000);
    });
  }

  if(scroll > 400){
    $('#primeiro').fadeIn(1000, function(){
      $('#segundo').fadeIn(500, function(){
        $('#terceiro').fadeIn(500);
      });
    });
  }
});