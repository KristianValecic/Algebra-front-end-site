$(document).ready(function(){
let clicked = false;
let brzinaAnimacije = 300;
let delay = 200;


$.fn.close = function(){
  $("#lightbox").animate({opacity:0})
  setTimeout(function() {
  $("#lightbox").css('display', "none")
  },delay)
  $("#LBImage1").css('display', "none")
  $("#LBImage2").css('display', "none")
}

  $("#Image1").on('click', function(){
    $("#lightbox").css('display', "flex")
    $("#LBImage1").css('display', "block")
    $("#LBImage1").css('left', "")
    $("#LBImage1").css('right', "")
    $("#lightbox").animate({opacity:1}, brzinaAnimacije)
  })

  $("#Image2").on('click', function(){
    $("#lightbox").css('display', "flex")
    $("#LBImage2").css('display', "block")
    $("#LBImage2").css('left', "")
    $("#LBImage2").css('right', "")
    $("#lightbox").animate({opacity:1}, brzinaAnimacije)
  })

  $("#lightbox").on('click',function(e){
    if (e.target === e.currentTarget) {
      $.fn.close();
    }
  })

  $("#backArrow").on('click', function(){
    if($("#LBImage1").css('display')==="none")
    {
      $("#LBImage1").css('left', "-100%")
      $("#LBImage1").css('display', "block")
      $("#LBImage1").animate({left: "+=100%"}, brzinaAnimacije)
      $("#LBImage2").animate({left: "+=100%"}, brzinaAnimacije)
      setTimeout(function() {
      $("#LBImage2").css('display', "none")
      $("#LBImage2").css('left', "")
      $("#LBImage2").css('right', "")
    },brzinaAnimacije+delay-2)
    }
    else if($("#LBImage2").css('display')==="none")
    {
      $("#LBImage2").css('left', "-100%")
      $("#LBImage2").css('display', "block")
      $("#LBImage1").animate({left: "+=100%"}, brzinaAnimacije)
      $("#LBImage2").animate({left: "+=100%"}, brzinaAnimacije)
      setTimeout(function() {
      $("#LBImage1").css('display', "none")
      $("#LBImage1").css('left', "")
      $("#LBImage1").css('right', "")
    },brzinaAnimacije+delay+2)
    }
  })

    $("#forwardArrow").on('click', function(){
      if($("#LBImage1").css('display')==="none")
      {
        $("#LBImage2").css('left', "")
        $("#LBImage2").css('right', "")
        $("#LBImage1").css('right', "-100%")
        $("#LBImage1").css('display', "block")
        $("#LBImage1").animate({right: "+=100%"}, brzinaAnimacije)
        $("#LBImage2").animate({right: "+=100%"}, brzinaAnimacije)
        setTimeout(function() {
        $("#LBImage2").css('display', "none")
      },brzinaAnimacije+delay-1)
      }
      else if($("#LBImage2").css('display')==="none")
      {
        $("#LBImage1").css('left', "")
        $("#LBImage1").css('right', "")
        $("#LBImage2").css('right', "-100%")
        $("#LBImage2").css('display', "block")
        $("#LBImage1").animate({right: "+=100%"}, brzinaAnimacije)
        $("#LBImage2").animate({right: "+=100%"}, brzinaAnimacije)
        setTimeout(function() {
        $("#LBImage1").css('display', "none")
      },brzinaAnimacije+delay+1)
      }
  })
  $("#exit").on('click', $.fn.close)
});
