"use strict";
const Menu_Handler = {
    init:function(){
        Menu_Handler.menu_buttons();
    },
    menu_buttons:function(){
        var classArray = ["menu-id-hem", "menu-id-historik", "menu-id-plan", "menu-id-masterrad", "menu-id-lokaler", "menu-id-kontakt","menu-id-aktiviteter","menu-id-gallery"];
        for(var i = 0; i < classArray.length; i++){
            var currentid = $("#" + classArray[i])
            if(currentid.hasClass("menu-width-min")){
                $("#" + classArray[i] + "-link").hide();
            }
        }
        if($("#menu-id-hem").hasClass("menu-width-min")){
            $("#menu-id-hem").hover(function(){
                $("#menu-id-hem").stop().animate({ width:"100%" }, 500);
                $("#menu-id-hem-link").show()
            }, function(){
                $("#menu-id-hem").stop().animate({ width:"10%" }, 500);
                $("#menu-id-hem-link").fadeOut();
            });
        }
        
        if($("#menu-id-historik").hasClass("menu-width-min")){
            $("#menu-id-historik").hover(function(){
                $("#menu-id-historik").stop().animate({ width:"100%" }, 500);
                $("#menu-id-historik-link").show();
            }, function(){
                $("#menu-id-historik").stop().animate({ width:"10%" }, 500);
                $("#menu-id-historik-link").fadeOut();
            });
        }
        
        if($("#menu-id-plan").hasClass("menu-width-min")){
            $("#menu-id-plan").hover(function(){
                $("#menu-id-plan").stop().animate({ width:"100%" }, 500);
                $("#menu-id-plan-link").show();
            }, function(){
                $("#menu-id-plan").stop().animate({ width:"10%" }, 500);
                $("#menu-id-plan-link").fadeOut();
            });
        }
        if($("#menu-id-masterrad").hasClass("menu-width-min")){
            $("#menu-id-masterrad").hover(function(){
                $("#menu-id-masterrad").stop().animate({ width:"100%" }, 500);
                $("#menu-id-masterrad-link").show();
            }, function(){
                $("#menu-id-masterrad").stop().animate({ width:"10%" }, 500);
                $("#menu-id-masterrad-link").fadeOut();
            });
        }
        if($("#menu-id-lokaler").hasClass("menu-width-min")){
            $("#menu-id-lokaler").hover(function(){
                $("#menu-id-lokaler").stop().animate({ width:"100%" }, 500);
                $("#menu-id-lokaler-link").show();
            }, function(){
                $("#menu-id-lokaler").stop().animate({ width:"10%" }, 500);
                $("#menu-id-lokaler-link").fadeOut();
            });
        }
        if($("#menu-id-kontakt").hasClass("menu-width-min")){
            $("#menu-id-kontakt").hover(function(){
                $("#menu-id-kontakt").stop().animate({ width:"100%" }, 500);
                $("#menu-id-kontakt-link").show();
            }, function(){
                $("#menu-id-kontakt").stop().animate({ width:"10%" }, 500);
                $("#menu-id-kontakt-link").fadeOut();
            });
        }
        if($("#menu-id-aktiviteter").hasClass("menu-width-min")){
            $("#menu-id-aktiviteter").hover(function(){
                $("#menu-id-aktiviteter").stop().animate({ width:"100%" }, 500);
                $("#menu-id-aktiviteter-link").show();
            }, function(){
                $("#menu-id-aktiviteter").stop().animate({ width:"10%" }, 500);
                $("#menu-id-aktiviteter-link").fadeOut();
            });
        }
        if($("#menu-id-gallery").hasClass("menu-width-min")){
            $("#menu-id-gallery").hover(function(){
                $("#menu-id-gallery").stop().animate({ width:"100%" }, 500);
                $("#menu-id-gallery-link").show();
            }, function(){
                $("#menu-id-gallery").stop().animate({ width:"10%" }, 500);
                $("#menu-id-gallery-link").fadeOut();
            });
        }
        
    }
};
window.onload = Menu_Handler.init();