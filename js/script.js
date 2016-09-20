"use strict";
const Menu_Handler = {
    init:function(){
        var classArray = ["menu-id-hem", "menu-id-historik", "menu-id-plan", "menu-id-masterrad", "menu-id-lokaler", "menu-id-kontakt","menu-id-aktiviteter","menu-id-gallery"];
        Menu_Handler.menu_buttons(classArray);
        Menu_Handler.menu_click(classArray);
        Menu_Handler.menu_load_animations();
    },
    menu_buttons:function(Carray){
        for(var i = 0; i < Carray.length; i++){
            var currentid = $("#" + Carray[i])
            if(currentid.hasClass("menu-width-min")){
                $("#" + Carray[i] + "-link").hide();
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
        
    },
    menu_click:function(carray){
        var classArray = carray;
        console.log(classArray);
        $("#menu-id-hem-link").click(function(e){
            e.preventDefault();
            var goTo = this.getAttribute("href");
            Menu_Handler.menu_page_transitions(classArray,e);
            setTimeout(function(){
                window.location = goTo;
            },700);
        });
        $("#menu-id-historik-link").click(function(e){
            e.preventDefault();
            var goTo = this.getAttribute("href");
            Menu_Handler.menu_page_transitions(classArray,e);
            setTimeout(function(){
                window.location = goTo;
            },700);
        });
        $("#menu-id-plan-link").click(function(e){
            e.preventDefault();
            var goTo = this.getAttribute("href");
            Menu_Handler.menu_page_transitions(classArray,e);
            setTimeout(function(){
                window.location = goTo;
            },700);
        });
        $("#menu-id-masterrad-link").click(function(e){
            e.preventDefault();
            var goTo = this.getAttribute("href");
            Menu_Handler.menu_page_transitions(classArray,e);
            setTimeout(function(){
                window.location = goTo;
            },700);
        });
        $("#menu-id-lokaler-link").click(function(e){
            e.preventDefault();
            var goTo = this.getAttribute("href");
            Menu_Handler.menu_page_transitions(classArray,e);
            setTimeout(function(){
                window.location = goTo;
            },700);
        });
        $("#menu-id-kontakt-link").click(function(e){
            e.preventDefault();
            var goTo = this.getAttribute("href");
            Menu_Handler.menu_page_transitions(classArray,e);
            setTimeout(function(){
                window.location = goTo;
            },700);
        });
        $("#menu-id-aktiviteter-link").click(function(e){
            e.preventDefault();
            var goTo = this.getAttribute("href");
            Menu_Handler.menu_page_transitions(classArray,e);
            setTimeout(function(){
                window.location = goTo;
            },700);
        });
        $("#menu-id-gallery-link").click(function(e){
            e.preventDefault();
            var goTo = this.getAttribute("href");
            Menu_Handler.menu_page_transitions(classArray,e);
            setTimeout(function(){
                window.location = goTo;
            },700);
        });
    },
    menu_load_animations:function(){
        var x = window.location.href.split('/').pop();
        switch(x){
            default:
                $("#menu-id-hem").stop().animate({ width:"100%" }, 300);
                $("#menu-id-hem").removeClass("menu-width-min");
                $("#menu-id-hem").unbind('mouseenter mouseleave');
                $(".content-wrapper").fadeIn();
                $("#menu-id-hem-link").show()
                break;
            case "historik":
                $("#menu-id-historik").animate({ width:"100%" }, 300);
                $("#menu-id-historik").removeClass("menu-width-min");
                $("#menu-id-historik").unbind('mouseenter mouseleave');
                $(".content-wrapper").fadeIn();
                $("#menu-id-historik-link").show();
                break;
            case "motesplan":
                $("#menu-id-plan").stop().animate({ width:"100%" }, 300);
                $("#menu-id-plan").removeClass("menu-width-min");
                $("#menu-id-plan").unbind('mouseenter mouseleave');
                $(".content-wrapper").fadeIn();
                $("#menu-id-plan-link").show();
                break;
            case "masterrad":
                $("#menu-id-masterrad").stop().animate({ width:"100%" }, 300);
                $("#menu-id-masterrad").removeClass("menu-width-min");
                $("#menu-id-masterrad").unbind('mouseenter mouseleave');
                $(".content-wrapper").fadeIn();
                $("#menu-id-masterrad-link").show();
                break;
            case "lokaler":
                $("#menu-id-lokaler").stop().animate({ width:"100%" }, 300);
                $("#menu-id-lokaler").removeClass("menu-width-min");
                $("#menu-id-lokaler").unbind('mouseenter mouseleave');
                $(".content-wrapper").fadeIn();
                $("#menu-id-lokaler-link").show();
                break;
            case "kontakt":
                $("#menu-id-kontakt").stop().animate({ width:"100%" }, 300);
                $("#menu-id-kontakt").removeClass("menu-width-min");
                $("#menu-id-kontakt").unbind('mouseenter mouseleave');
                $(".content-wrapper").fadeIn();
                $("#menu-id-kontakt-link").show();
                break;
            case "aktiviteter":
                console.log(x);
                $("#menu-id-aktiviteter").stop().animate({ width:"100%" }, 300);
                $("#menu-id-aktiviteter").removeClass("menu-width-min");
                $("#menu-id-aktiviteter").unbind('mouseenter mouseleave');
                $(".content-wrapper").fadeIn();
                $("#menu-id-aktiviteter-link").show();
                break;
            case "bildgalleri":
                $("#menu-id-gallery").stop().animate({ width:"100%" }, 300);
                $("#menu-id-gallery").removeClass("menu-width-min");
                $("#menu-id-gallery").unbind('mouseenter mouseleave');
                $(".content-wrapper").fadeIn();
                $("#menu-id-gallery-link").show();
                break;
        }
            
    },
    menu_page_transitions:function(carray){
        $(".content-wrapper").fadeOut();
        var ClassArray = carray;
        for(var x = 0; x < ClassArray.length; x++){
            var currentid = $("#" + ClassArray[x])
            if(currentid.hasClass("menu-width-min")){
            }
            else{
                console.log(currentid);
                currentid.animate({ width:"10%" }, 500);
                $("#" + ClassArray[x] + "-link").fadeOut();
            }
        }
    }
};
window.onload = Menu_Handler.init();