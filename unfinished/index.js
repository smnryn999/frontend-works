  $(function () {
     
  
   var words = ["Milk", "Tea", "Meat", "Egg"];
   var i = 0;
   
      
      function writing() {
         
         $("#h1").animate( {width: '300px'}, 2000).html(words[i]);
         
         setTimeout(function(){$(h1).animate( {width: '0px'}, 1000);}, 4000)
         i++;
         if(i==words.length){i=0}
         if(i<words.length){
            setTimeout(writing, 5000);            
            }        
      }
      writing();
      
      
      // BARS
      $("#bars").click(function() {
         if($("#menu").css("display") == 'none') {
               $("#menu").css("display", "flex");
               $("#menu").animate({width: "10%"});
               $(".bar1").css('transform', 'translateY(5px)');
               $(".bar3").css('transform', 'translateY(-5px)');
            
               setTimeout(function () {
                  
                  $("#menu").css("width", "100%");                 
                  $(".bar1").css('transform', 'rotate(135deg) translate(4px, -10px)');
                  $(".bar2").css('display','none');
                  $(".bar3").css('transform', 'rotate(45deg) translate(5px, 0px)');
               }, 600);
         }
         else {
               $("#menu").css("width", "0px").hide(820);
               $(".bar1").css('transform', 'rotate(0deg) translate(0px, 5px)');
               $(".bar2").css('display','block');
               $(".bar3").css('transform', 'rotate(0deg) translate(0px, -5px)');
               
               setTimeout(function () {
                  $(".bar1").css('transform', 'translate(0px, 0px)');
                  $(".bar3").css('transform', 'translate(0px, 0px)');
               }, 600)             
          }        
      })
      
      
      
      
      
      
})
