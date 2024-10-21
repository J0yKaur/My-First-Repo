$(document).ready(function() {
$(".inline-block-1").hover(
        function() {
        $(this).addClass("bold");
      },
      function() {
        $(this).removeClass("bold"); 
      }
     );


     $(".toggle").click(function(){
        $(this).find(".toggleContainer").toggleClass("active");
        $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
    });
});