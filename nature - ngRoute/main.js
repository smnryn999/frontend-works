var arrow=document.querySelectorAll(".arrow");
var table=document.querySelector(".table");
var iconBars=document.querySelector(".icon-bars");
var rightMenu=document.querySelector("#rightMenu");
var section=document.querySelector("section");
var i;
  
  iconBars.onclick=function () {
				this.classList.toggle("aktif");}
				
  // RIGHT MENU
  table.onclick=function () {
				this.classList.toggle("rotate");
				rightMenu.parentElement.classList.toggle("right")}
		
  // ARROWS IN HEADER
  for(var i=0; i<arrow.length; i++){
  			arrow[i].parentElement.onclick=function () {
				this.classList.toggle("rotate1");} 
  }
  
  
  
// JQUERY

  $(function(){
	// MEDIUM MENUS
			 $(iconBars).click(function() {
						$("#menu").slideToggle(500);
						$(".rMenu").animate({width:"0"}, 200);
						$("#p1").html("");
			 })
			 
			 $(".medArrow").click(function() {
			 			$("#p1").html("&#10094;  "+$(this).html());
			 		 $("#p1 span").css("display","none");
			 })
			 			 
			 $(".medArrow").eq(0).click(function() {
			 				$(".rMenu").eq(0).animate({width:"100%"}).show();})
			 $(".medArrow").eq(1).click(function() {
			 				$(".rMenu").eq(1).animate({width:"100%"}).show();})
			 	$(".medArrow").eq(2).click(function() {
			 				$(".rMenu").eq(2).animate({width:"100%"}).show();})
			
			$("#menu").click(function(event) {
			 				if(!event.target.matches(".medArrow")) {
			 								$("#p1").html("");
	             $(".rMenu").animate({width:"0"}, 300);}
			 })
			   
 // LARGE MENUS
	   $("#autumn").click(function() {
						$("#fallMenu").animate({height:"toggle", opacity:"toggle"});
					 $(".uparrow").eq(0).fadeToggle(200);
		  	}) 
			$("html").click(function(event) {
						 if(!event.target.matches("#autumn")) {
										$("#fallMenu").animate({height:"hide", opacity:"hide"});
										$("#autumn").removeClass("rotate1");
										$(".uparrow").eq(0).fadeOut(200);}
		  	})
					
    $("#blue").click(function() {
						$("#blueMenu").animate({height:"toggle", opacity:"toggle"});
						$("#uparrow").fadeToggle(200);
			}) 
	   $("body").click(function(event) {
						 if(!event.target.matches("#blue")) {
										$("#blueMenu").animate({height:"hide", opacity:"hide"});
										$("#blue").removeClass("rotate1");
										$("#uparrow").fadeOut(200);}
			}) 
			
	// HEADER
			$("section, .navbar, .logo").click(function() {
							rightMenu.parentElement.removeAttribute("class");
							$(table).removeClass("rotate");})
							
			$(".fa-moon").click(function() {
							$("html").toggleClass("dark");
							$(this).toggleClass("fa-sun");
			})
			
			$("button:contains('Sign in')").click(function() {
						alert("This feature is not available yet.");
			})
							
							
})
