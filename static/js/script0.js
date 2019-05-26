$(document).ready(function(){

	var navTop = $("nav").offset().top;

    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
    	fullWidth: true,
		indicators:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true
  	});

    $('.materialboxed').materialbox();

	$("#mobile a[data-target]").each(function(){
		var li = $(this).parent();
		var target = $(this).attr("data-target");
		var dd = $("#"+target).clone();
		dd.removeAttr("id");
		li.append(dd);
		$(this).removeAttr("data-target");
		$(this).click(function(e){
			e.preventDefault();
			li.find(".dropdown-content").slideToggle(150);
		})
	})

	try{
		$('.dropdown-trigger').dropdown({
			hover: true,
			closeOnClick: true,
			coverTrigger: false,
			constrainWidth: false
		});
	}catch(err){

	}


	$(window).scroll(function(){
		if($(this).scrollTop() >= navTop){
			$("nav").addClass("fixed");
		}else{
			$("nav").removeClass("fixed");
		}
	})

	if(jQuery().owlCarousel){
		$(".owl-carousel").owlCarousel({
			items:1,
			nav:true,
			dots:true,
			loop:true,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true
		});
	}
});
