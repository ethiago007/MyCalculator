$(document).ready(function() {

$(".normcalc").click(function() {
    $(".scientific-func").hide()
    $(".scicalc").removeClass("let1")
    $(".normcalc").addClass("let1")
    $(".converter").hide();
    $(".NORMAL").show();
});

$(".scicalc").click(function() {
    $(".scientific-func").show();
    $(".scicalc").addClass("let1")
    $(".normcalc").removeClass("let1")
    $(".normcalc").addClass("let")
    $(".converter").hide();
    $(".NORMAL").show();
});

$(".unit").click(function(){
    $(".scientific-func").hide();
    $(".NORMAL").hide();
    $(".converter").show();
    $(".scicalc").removeClass("let1")
    $(".normcalc").removeClass("let1")
})

// CODE FOR DARK
$(".dark-mode").click(function(){
 
   $("form").addClass("back")
   $(".noir").addClass("inputfd")
   $(".noir1").addClass("inputfd1")
   $(".noir").removeClass("input")
   $(".noir1").removeClass("input1")
   $(".rowd2").addClass("rowdark")
   $(".roww").addClass("rowdark")
   $(".call").addClass("output1")
   $(".inputbt").addClass("inputbtd")
   $(".input13").addClass("inputd")
   $(".input13").removeClass("inputc")
   $(".inputbt").removeClass("inputbtn")
   $(".light-mode").show();
   $(".dark-mode").hide()
   $(".rowd2").show()
})


// CODE FOR LIGHT
$(".light-mode").click(function(){
    $("form").removeClass("back")
   $(".noir").removeClass("inputfd")
   $(".noir1").removeClass("inputfd1")
   $(".noir").addClass("input")
   $(".noir1").addClass("input1")
   $(".rowd2").removeClass("rowdark")
   $(".roww").removeClass("rowdark")
   $(".call").removeClass("output1")
   $(".inputbt").removeClass("inputbtd")
   $(".input13").removeClass("inputd")
   $(".input13").addClass("inputc")
   $(".inputbt").addClass("inputbtn")
   $(".light-mode").hide();
   $(".dark-mode").show()
   $(".rowd").show()
   $(".rowd2").hide()
})


// MASS BUTTON 
$(".massbtn").click(function(){
$("section.mass").show();
$(".scientific-func").hide();
$(".NORMAL").hide();
$(".converter").hide();

})

// LENGTH BUTTON
$(".lengthbtn").click(function(){
    $("section.length").show();
    $(".scientific-func").hide();
    $(".NORMAL").hide();
    $(".converter").hide();
    
    })

    // BACK BUTTON
$(".backmass").click(function(){
    $(".converter").show();
    $("section.mass").hide();
    $("section.length").hide();
})


});