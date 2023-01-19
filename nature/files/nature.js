var arrow=document.querySelectorAll(".arrow");
var table=document.querySelector(".table");
var iconBars=document.querySelector(".icon-bars");
var rightMenu=document.querySelector("#rightMenu");
var section=document.querySelector("section");
var slides=document.querySelectorAll(".slide");
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
  
  // MUSIC
  var play = true;
  var audio = document.querySelector("audio");
  var music = document.querySelector("#music");
  function playMusic() {
      if(play) {
          audio.play();
          music.innerText = "music_off";
      }
      else {
          audio.pause();
          music.innerText = "music_note";
          }
       play = !play; 
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
							
				// SLIDER
	var a=0;
	var time=300;
	var media_sm=matchMedia("(max-width: 600px)");
	var media_md=matchMedia("(max-width: 850px)");
	
	  $("#forwardSlide").click(function(){
	  
	       if(media_sm.matches) {
	       				if(a>slides.length-2) {
	       		  a=-1;      		  
	       		 $("img.open:first").animate({width:"show",opacity:"show"}, time);}
	       $(slides).eq(a+1).prevAll().hide(time);
	  				$(slides).eq(a+1).show(time);				
	  				$(slides).eq(a+1).nextAll().hide(time);
	       		  
	       }   
	      
	      else if(media_md.matches) {
	           if(a>slides.length-3) {
	       		  a=-1;      		  
	       		 $("img.open:not(.last)").animate({width:"show",opacity:"show"}, time);}
	       $(slides).eq(a+1).prevAll().hide(time);
	  				$(slides).eq(a+1).show(time);
	  				$(slides).eq(a+2).show(time);				
	  				$(slides).eq(a+2).nextAll().hide(time);
	       		  }
	       else {
	           if(a>slides.length-4) {
	       		  a=-1;
	       		  $("img.open").animate({width:"show",opacity:"show"}, time)}
	       $(slides).eq(a+1).prevAll().hide(time);
	  				$(slides).eq(a+1).show(time);
	  				$(slides).eq(a+2).show(time);
	  				$(slides).eq(a+3).show(time);
	  				$(slides).eq(a+3).nextAll().hide(time);}
	  				
	  				a++;
	  })
	  
	  $("#backSlide").click(function(){
	      
	      if(media_sm.matches) {
	       				if(a<=0) {
	  				    a=slides.length;
	  				  $("img.close:last-child").animate({width:"show",opacity:"show"}, time)}
	       $(slides).eq(a-1).prevAll().hide(time);
	  				$(slides).eq(a-1).show(time);				
	  				$(slides).eq(a-1).nextAll().hide(time);
	       		  
	       }   
	  				else if(media_md.matches) {
	  				    if(a<0) {
	  				    a=slides.length-2;
	  				  $("img.close:not(.first)").animate({width:"show",opacity:"show"}, time)}
	  				$(slides).eq(a).prevAll().hide(time);				
	  				$(slides).eq(a).show(time);
	  				$(slides).eq(a+1).show(time);
	  				$(slides).eq(a+1).nextAll().hide(time);
	  				    }
	  				else {
	  				    if(a<1) {
	  				    a=slides.length-2;
	  				    $("img.close").animate({width:"show",opacity:"show"}, time)}
	  				$(slides).eq(a-1).prevAll().hide(time);
	  				$(slides).eq(a-1).show(time);
	  				$(slides).eq(a).show(time);
	  				$(slides).eq(a+1).show(time);
	  				$(slides).eq(a+1).nextAll().hide(time);
	  				    }
	  				
	  				a--;
	  })

// TEXT IMG
	
	  if(media_sm.matches){
		$("#fixed4").css("background","#fafafa url('../pictures/winter/winter-trees.png') center no-repeat");
		$("#fixed5").css({"background":"LavenderBlush url('../pictures/sakura2.png') center no-repeat","background-size":"contain"});		
	}  
	
 // FOOTER
	  $("footer dd:first").click(function() {
	  				$("#accor1").slideToggle(function() {
	  								if($("dd:first span").text()=="+") {
	  								$("dd:first span").text("-");}
	  								else {
	  								$("dd:first span").text("+");}
	  				}) 				
	  })
	  $("footer dd:last").click(function() {
	  				$("#accor2").slideToggle(function() {
	  								if($("dd:last span").text()=="+") {
	  								$("dd:last span").text("-");}
	  		       	else {
	  								$("dd:last span").text("+");}
	  				})
	  })


// WİNTER.HTML WİNTER.HTML WİNTER.HTML WİNTER.HTML WİNTER.HTML WİNTER.HTML WİNTER.HTML

  $("#smallImages .image").mouseover(function() {
			//$("#winterSlide").html("<img class='image' src='" + $(this).attr('src')+"'>");
			$("#bigImage").hide(1, ()=>{		
			$("#bigImage").attr("src",$(this).attr("src"));
			$("#bigImage").fadeIn(500);})
  })
				
})
