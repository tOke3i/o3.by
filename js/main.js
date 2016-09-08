$(document).ready(function(){
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#up-btn').fadeIn();
		} else {
			$('#up-btn').fadeOut();
		}
	});


	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$(".bx-controls-direction").fadeOut();
		}else {
			$(".bx-controls-direction").fadeIn();
		}
	});
	

$(window).scroll(function(){
			if ($(this).scrollTop() > 200) {
			$(' body nav').addClass("bg_for_fixed_header");
		}
			if ($(this).scrollTop() < 200) {
			$(' body nav').removeClass("bg_for_fixed_header");
		}
		if ($(this).scrollTop() == 0){
			$(' body nav').removeClass("contact_marg_forfixed_nav");
		}
		
	});

$(document).ready(function() {
 
$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 900);
        return false; 
});
    
});

	//Click event to scroll to top
	$('#up-btn').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


  $('.bxslider').bxSlider({
  
  		  	speed: 900,
  		  	slideWidth: 1500,
            auto: true,
           	pager: false
               
  	});

 
$(".accordion").accordion({ 

heightStyle: "content" 

});
$('.close').click(function () {
$( ".modal" ).fadeOut();
$( ".navbar-fixed-top" ).fadeIn();
return false;
});
$('.product_img').click(function () {
$(".navbar-fixed-top").fadeOut();

var src1 = $(this).attr('src');
$('.modal-content').attr('src',src1);
var captionText = $(this).attr('alt');	
$('.caption').html(captionText);
$( ".modal" ).fadeIn();
return false;
});

 $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth < 1200) $("body .navbar").removeClass("navbar-fixed-top"); 
    if(windowWidth > 1196)	$("body .contact").addClass("contact_marg_forfixed_nav");
    if(windowWidth < 1200)	$(' body nav').removeClass("bg_for_fixed_header");
    if(windowWidth < 1000)	$("body .contact").removeClass("contact_marg_forfixed_nav");
    else $("body .contact").removeClass("contact_marg_forfixed_nav"); 
  });



});



  






	

