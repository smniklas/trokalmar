"use strict";
const Image_Handler = {
    init:function(){
        Image_Handler.image_fancy();
    },
    image_fancy:function(){
        $(".grouped_elements").css("width", "100px").css("height", "100px");
        $(".grouped_elements").click(function(e){
            console.log(e);
        //   $(".grouped_elements").animate({width:"400px"}, 500);
        //   $(".grouped_elements").animate({height:"400px"}, 500);
        });
    }
}
window.onload = Image_Handler.init();