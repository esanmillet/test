$(document).ready(function(){

  // This type of expressions will run without the need of calling them.
  // In other words, this will hide set2 and set3 when the pages load
  $("#step1").hide();
  $("#step2").hide();
  $("#step3").hide();
  $("#step4").hide();
  $("#step5").hide();

  // When someone Clicks button1 show the first one and hide the other 2 divs with the id set2 and set3
  $("#button1").click(function(){
    $("#step1").show();
    $("#step2").hide();
    $("#step3").hide();
    $("#step4").hide();
    $("#step5").hide();
  });
  // When someone Clicks button2 show the second one and hide the other 2 divs with the id set1 and set3
  $("#button2").click(function(){
    $("#step1").hide();
    $("#step2").show();
    $("#step3").hide();
    $("#step4").hide();
    $("#step5").hide();
  });
  // When someone Clicks button3 show the third one and hide the other 2 divs with the id set1 and set2
  $("#button3").click(function(){
    $("#step1").hide();
    $("#step2").hide();
    $("#step3").show();
    $("#step4").hide();
    $("#step5").hide();
  });

  $("#button4").click(function(){
    $("#step1").hide();
    $("#step2").hide();
    $("#step3").hide();
    $("#step4").show();
    $("#step5").hide();
  });

  $("#button5").click(function(){
    $("#step1").hide();
    $("#step2").hide();
    $("#step3").hide();
    $("#step4").hide();
    $("#step5").show();
  });

  $("footer").mouseover(function(){
      $("footer p").html("Haha I'm just kidding!");
  });

  $("footer").mouseleave(function() {
    $("footer p").css("color", "red");
    $("footer p").html("Win free money by taking quizzes in japanese!");
  });

  });
