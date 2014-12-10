// Copyright: Andoni M. Garcia. Food Blog. 2014

function renderAbout(){
    $(".activeTab").removeClass("activeTab");
    $("#about").addClass("activeTab");
    
    var about = "My Blog!";
    var par = $("<p></p>").append(about)
            .css({"font-size":"24px","font-family":"'Lobster',Fantasy,serif","text-align":"center","text-decoration":"underline"});
    
    var about1 = "I have always been a foodie at heart, but growing up in San Diego, never knew what food really was. San Diego, and the SoCal scene in general, doesn't have the restaurants that you associate with a foodie-scene. Sure we have bomb mexican-food, the typical high-end steakhouses, and fresh seafood shops; but NONE of these are progressive. NONE of these are exquisite. NONE of these push the boundary.";
    var about2 = "When I came out to Chicago, all that changed! Sure there are still world-class steakhouses that I LOVE going to. But there is a Michelin scene! And hate the Guide as much as you want, but when push comes to shove, they hand select the most progressive, most innovative, and best restaurants in the world.";
    var about3 = "So this here blog is meant to chronicle my experiences throughout the Chicago food scene. I'm not here to write reviews. I'm not here to recommend places. I'm here to show you where I've been, and MAYBE where I might go next. So come join my journey!";
    var about4 = "-Andoni";
    
    $(".content").empty()
            .append(par,
                    $("<p></p>").append(about1),
                    $("<p></p>").append(about2),
                    $("<p></p>").append(about3),
                    $("<p></p>").append(about4),
                    $("<br />"));
}

function renderContact(){
    $(".activeTab").removeClass("activeTab");
    $("#contact").addClass("activeTab");
    
    var contact = "Here's Who I Am!";
    var par = $("<p></p>").append(contact)
            .css({"font-size":"24px","font-family":"'Lobster',Fantasy,serif","text-decoration":"underline"});
    
    var img = $("<img />").attr({"src":"img/me.jpg","alt":"A head-shot of Andoni M. Garcia"})
            .css({"margin-left":"auto","margin-right":"auto","border-radius":"50%","border":"1px black solid","width":"65%","position":"relative"});
    if($(window).width() < 820){
        img.css("width","40%");
    }
    var anch1 = $("<a></a>").text("Andoni M. Garcia")
            .attr({"href":"http://andonigarcia.com","target":"_blank"})
            .css({"font-size":"24px"});
    var anch2 = $("<a></a>").text("andoni@uchicago.edu")
            .attr({"href":"mailto:andoni@uchicago.edu","target":"_blank"})
            .css({"font-size":"20px"});
    
    $(".content").empty()
            .append(par, img,
                    $("<p></p>").append(anch1),
                    $("<p></p>").append(anch2),
                    $("<br />"))
            .css({"text-align":"center"});
}

$(document).ready(function(){
    var currSmall = true;
    
    if($(window).width() >= 820){
        $(".content").removeClass("contentHidden")
            .addClass("contentShown");
        renderAbout();
        currSmall = false;
    }
    
    $(window).on('resize', function(){
        var win = $(window).width();
        if(win >= 820){
            currSmall = false;
            $(".myNav").height("100%");
            $(".googleMap").height("100%");
            $(".content").removeClass("contentHidden")
                    .height("90%");
            $(".tabList").height("auto");
            
            if ($("#about").hasClass("activeTab")) {
                $("#about").click();
            } else if ($("#contact").hasClass("activeTab")) {
                $("#contact").click();
            } else {
                $("#about").click();
            }
        }
        
        if(win < 820){
            if(currSmall === false){
                $(".activeTab").removeClass(".activeTab");
                $(".googleMap").click();
            }
            currSmall = true;
        }
    });
    
    $("#about").click(function(){
        if($(window).width() < 820){
            $(".myNav").height("85%");
            $(".googleMap").height("15%")
                    .css("border-top","1px black solid");
            
            $(".tabList").height("10%");
            $(".content").removeClass("contentHidden")
                    .addClass("contentShown");
            renderAbout();
        } else {
            renderAbout();
        }
    });
    $("#contact").click(function(){
        if($(window).width() < 820){
            $(".myNav").height("85%");
            $(".googleMap").height("15%")
                    .css("border-top","1px black solid");
            
            $(".tabList").height("10%");
            $(".content").removeClass("contentHidden")
                    .addClass("contentShown");
            renderContact();
        } else {
            renderContact();
        }
    });
    $(".googleMap").click(function(){
       if($(window).width() < 820){
            $(".myNav").height("10%");
            $(".googleMap").height("90%")
                    .css("border-top","none");
            
            $(".tabList").height("100%");
            $(".content").removeClass("contentShow")
                    .addClass("contentHidden");
            $(".activeTab").removeClass("activeTab");
        }
    });
});