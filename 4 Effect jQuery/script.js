$(document).ready(function () {
    $("#sembunyi").click(function () {
        $(".d1").hide();
        $(".d2").hide("slow");
        $(".d3").hide("fast");
        $(".d4").hide(5000);
    });

    $("#tampil").click(function () {
        $(".d1").show();
        $(".d2").show("slow");
        $(".d3").show("fast");
        $(".d4").show(5000);
    });
    $("#toggle").click(function () {
        $(".d1").toggle();
        $(".d2").toggle("slow");
        $(".d3").toggle("fast");
        $(".d4").toggle(5000);
    });
    $("#fade1").click(function () {
        $(".f1").fadeOut();
        $(".f2").fadeOut("slow");
        $(".f3").fadeOut("fast");
        $(".f4").fadeOut(5000);
    });
    $("#fade2").click(function () {
        $(".f1").fadeIn();
        $(".f2").fadeIn("slow");
        $(".f3").fadeIn("fast");
        $(".f4").fadeIn(5000);
    });
    $("#fade3").click(function () {
        $(".f1").fadeToggle();
        $(".f2").fadeToggle("slow");
        $(".f3").fadeToggle("fast");
        $(".f4").fadeToggle(5000);
    });
    $("#fade4").click(function () {
        $(".f1").fadeTo(2000, 0.2);
        $(".f2").fadeTo("slow", 0.3);
        $(".f3").fadeTo("fast", 0.1);
        $(".f4").fadeTo(5000, 0.4);
    });
    $("#slide1").click(function () {
        $(".s1").slideUp();
        $(".s2").slideUp("slow");
        $(".s3").slideUp("fast");
        $(".s4").slideUp(4000);
    });
    $("#slide2").click(function () {
        $(".s1").slideDown();
        $(".s2").slideDown("slow");
        $(".s3").slideDown("fast");
        $(".s4").slideDown(4000);
    });
    $("#slide3").click(function () {
        $(".s1").slideToggle();
        $(".s2").slideToggle("slow");
        $(".s3").slideToggle("fast");
        $(".s4").slideToggle(4000);
    });
});