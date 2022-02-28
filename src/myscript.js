$(document).ready(function(){
  $("#btnPlay").on('click',function(){  
    var frandomNum = Math.floor(Math.random()*6+1);
    var myDice1 = "<tr><td><img src='image/dice"+frandomNum+".png'</td></tr>";
    
    $('#dice1').html(myDice1);
    var srandomNum = Math.floor(Math.random()*6+1);
    var myDice2 = "<tr><td><img src='image/dice"+srandomNum+".png'</td></tr>";
    $('#dice2').html(myDice2);
    if(frandomNum > srandomNum){
        $('#winmsg').text("Winner is User 1");
    }
    else if(frandomNum < srandomNum) {
        $('#winmsg').text("Winner is User 2");
    }
    else{
        $('#winmsg').text("This is Draw");
    }
  })  
})





