//cf(https://hayakawayuki.com/4518)
$(function(){
  $('#main-nav li').on('click', function(){
  	$(this).children(".circle").addClass("circle_scaleUp is_active");
   /* if($(this).not('active')){
      // nav
      $(this).addClass('active').siblings('li').removeClass('active');
      // content
      var index = $('#main-nav li').index(this);
      $('#contents div').eq(index).addClass('active').siblings('div').removeClass('active');
    }*/
  })
});
