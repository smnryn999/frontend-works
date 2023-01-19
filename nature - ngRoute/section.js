var slides=document.querySelectorAll(".slide");
var i;

$(function() {
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
			$("#bigImage").fadeIn(500);  })
  })

})