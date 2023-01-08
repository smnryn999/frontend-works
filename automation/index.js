$(function () {
  
   let height = screen.height/2.1;
   $(".dropdown ul").css({"height":height+"px", "overflow":"scroll"});
   
   $("#laquo").click(laquo);
   $("#raquo").click(raquo);
   
   var sectionHeight = $("#right").css("height");
   $("#left").css({"height":sectionHeight, "overflow":"scroll"});
   
   // MODAL ANIMATION
   setTimeout(modal, 7000);
   
   function modal() {
      $("#modal").addClass("d-flex");
      
      let time = 100;
    setTimeout(function() {
      $("#modal-content").css({transform:"translateY(50%)"});      
      setTimeout(function() {
         $("#modal-content").css({transform:"translateX(20px)"});
         $("#modal").addClass("align-items-center");
         setTimeout(function() {
             $("#modal-content").css({transform:"translateX(-20px)"});
             setTimeout(function() {
                 $("#modal-content").css({transform:"translateY(20px)"});
                 setTimeout(function() {
                     $("#modal-content").css({transform:"translateY(-20px)"});
                     setTimeout(function() {
                         $("#modal-content").css({transform:"rotate(3deg)"});                             
                         setTimeout(function() {
                             $("#modal-content").css({transform:"rotate(-3deg)"});
                             setTimeout(function() {
                                 $("#modal-content").css({transform:"rotate(0deg)"});
                              }, time);
                           }, time);  
                       }, time);
                    }, time);
                 }, time);                            
              }, time);
           }, time);      
      }, time);
      
    }
      
   $("#modal-content span").click(function() {$("#modal").removeClass("d-flex");});
   
});

//PAGINATION
var page = $(".pagination .active").text();
var pages = $(".page-link");
var lastPage = pages.eq(pages.length-2).text();
function laquo() {  
   if(page != 1) {
      let p = $(".pagination .active").parent().prev().find("a").attr("href");
      window.open(p, "_self");
      }
}

function raquo() {
   if(page != lastPage) {
      let p = $(".pagination .active").parent().next().find("a").attr("href");
      window.open(p, "_self");
      }
}
















/* 
var x;
   $("#ul").scroll(() =>{
      x=$("#ul").scrollTop();
   })
   
   $("input").click(() => {
      x+=1;
      $(".dropdown ul").scrollTop(x);alert(x);
      });
       */
       
       
       // alert(screen.availHeight);
   /* let h = screen.height;
   var f=0;
   $(document).scroll(function () {
      f+=3;
      let s = $(document).scrollTop() -f;
      var height = h - s /9.5;
      $(".dropdown ul").css({"height":height+"px", "overflow":"scroll"});
   }); */
