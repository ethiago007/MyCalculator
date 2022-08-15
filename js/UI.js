$(document).ready(function() {



$(".normcalc").click(function() {
    $(".scientific-func").hide()
    $(".scicalc").removeClass("let1")
    $(".normcalc").addClass("let1")
    $(".converter").hide();
    $(".science2").show();
});

$(".scicalc").click(function() {
    $(".scientific-func").show();
    $(".scicalc").addClass("let1")
    $(".normcalc").removeClass("let1")
    $(".normcalc").addClass("let")
    $(".converter").hide();
    $(".science2").show();
});

$(".unit").click(function(){
    $(".scientific-func").hide();
    $(".science2").hide();
    $(".converter").show();
    $(".scicalc").removeClass("let1")
})

// CODE FOR DARK
$(".dark-mode").click(function(){
   $("form").addClass("back")
   $(".noir").addClass("inputfd")
   $(".noir1").addClass("inputfd1")
   $(".noir").removeClass("input")
   $(".noir1").removeClass("input1")
   $(".rowd").addClass("rowdark")
   $(".roww").addClass("rowdark")
   $(".call").addClass("output1")
   $(".inputbt").addClass("inputbtd")
   $(".input13").addClass("inputd")
   $(".input13").removeClass("inputc")
   $(".inputbt").removeClass("inputbtn")
   $(".dark-mode").hide()
   $(".light-mode").show()
})


// CODE FOR LIGHT
$(".light-mode").click(function(){
    $("form").removeClass("back")
   $(".noir").removeClass("inputfd")
   $(".noir1").removeClass("inputfd1")
   $(".noir").addClass("input")
   $(".noir1").addClass("input1")
   $(".rowd").removeClass("rowdark")
   $(".roww").removeClass("rowdark")
   $(".call").removeClass("output1")
   $(".inputbt").removeClass("inputbtd")
   $(".input13").removeClass("inputd")
   $(".input13").addClass("inputc")
   $(".inputbt").addClass("inputbtn")
   $(".dark-mode").show()
   $(".light-mode").hide()
})
});