var WB = WB || {};
var image_tracker = 0;
var slideIndex = 0;

WB.Indexing = function(){
	this.initialize();
}

WB.Indexing.prototype= {
	initialize:function(){
		this.bulb1();
		this.showSlides();
		this.check_empty();
		this.div_show();
		this.div_hide();
		this.navigation();
		
		$(window).on("load",function() {
		 $(window).scroll(function() {
		   var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		   $(".fade-animation").each(function() {

		     var objectBottom = $(this).offset().top + $(this).outerHeight();

		     if (objectBottom < windowBottom) { 
		       if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
		     } else { 
		       if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
		     }
		   });
		 }).scroll(); 
		});
	},

	bulb1:function()
	{
		$('#light_button').click(function(){
			var image = document.getElementById('bulb_state');
			if(image_tracker == 0)
			{
				image.src="assets/images/bulb_on.png";	
				image_tracker = 1;
				document.getElementById('light_button').innerHTML = "Turn Lights Off";
			}
			else
			{
				image.src="assets/images/bulb_off.png";	
				image_tracker = 0;
				document.getElementById('light_button').innerHTML = "Turn Lights On";
			} 
		})
  },

	showSlides:function () 
	{
		var i;
		var slides =  document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		for (i = 0; i < slides.length; i++) 
		{
			slides[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex> slides.length) 
		{
			slideIndex = 1;
		}
		for (i = 0; i < dots.length; i++)
	  {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
		var self = this;
		setInterval(self.showSlides, 2000);
	},

	check_empty:function ()
	{
		$('#form #submit').click(function(){
			if (document.getElementById('feed_name').value == "" || document.getElementById('feed_email').value == "" || document.getElementById('feed').value == "" )
			{
				alert("Please Fill All Fields !");
			} 
			else 
			{
				document.getElementById('form');
				var row = "Feedback Submitted. Thank you " + form.feed_name.value + " and email id as " + form.feed_email.value;
				  $('#feed_data').show();
				  $('#feed_data').append(row + '<br>');
		      $('#feedback').css('display', 'none');
					alert("Feedback Submitted Successfully...");
			}
		})
	},

	div_show:function() 
	{
		$('.container #popup').click(function(){
			document.getElementById('feedback').style.display = "block";
		})
	},

	div_hide:function()
	{
		$('#form #close').click(function(){
			document.getElementById('feedback').style.display = "none";
		})
	},

	navigation:function()
	{
		$(".container #navHome").click(function(){
			openblock('navHome');
    })

	  $(".container #navThree").click(function(){
			openblock('navThree');
	  })

	  $(".container #navAbout").click(function(){
			openblock('navAbout');
	  })

	  $(".container #navContact").click(function(){
			openblock('navContact'); 
	  })

  	function openblock(blockname)
		{
			$("#home-page, #about-page, #three-page, #contact-page").hide();

			if(blockname == 'navHome') {
				$("#home-page").show();
			}
			else {
				if(blockname == 'navThree') {
					$("#three-page").show();
				}
				else {
					if(blockname == 'navAbout') {
						$("#about-page").show();
					}
					else {
						if(blockname == 'navContact') {
							$("#contact-page").show();
						}
					}
				}
			} 

			$(".container #navHome").removeClass("active");
		  $(".container #navThree").removeClass("active");
			$(".container #navAbout").removeClass("active");
			$(".container #navContact").removeClass("active");
			$(".container #"+blockname+"").addClass("active");
		}
	}
}