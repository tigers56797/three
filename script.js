var percent = 0

function eatCount(){
  $('.monsterText').html("HAVE A <br>NICE DAY!")
}

function textCount(){
  $('.ogText').html("This is OREO's World!")
}

var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
 percent+=1
  if(percent>100){
    $(".pageLoading").addClass("complete")
    clearInterval(timer)
    setTimeout(eatCount,3000)
    setTimeout(textCount,3000)
  }
},30)