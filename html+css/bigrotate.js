var pointer=document.getElementById("pointer");
var rotate=document.getElementById("rotate");

var lottry=function(){
    var randomNumber=Math.floor(Math.random()*10);
    if(randomNumber<1){
        return {
            code: 1,
            text: "一等奖"
        };
    }
    else if(randomNumber<5){
        return {
            code: 2,
            text: "二等奖"
        };
    }
    else if(randomNumber<13){
        return {
            code: 3,
            text: "三等奖"
        };
    }
    else if(randomNumber<30){
        return {
            code: 4,
            text: "四等奖"
        };
    }
    else if(randomNumber<40){
        return {
            code: 5,
            text:  "五等奖"
        };
    }
    else if(randomNumber<50){
        return {
            code: 6,
            text:  "六等奖"
        };
    }
    else if(randomNumber<60){
        return {
            code: 7,
            text: 乌江
        };
    }
}
pointer.onclick=function(){

    rotate.style.transition = 'all 3s';
    var x=lottry ();
    console.log(x)

    var currentAngle=30+(360/7)*(x.code -1);
    rotate.style.transform= 'rotate(' + (currentAngle + 360*3) + 'deg)';

   setTimeout(function(){
  rotate.style.transition='all 0s';
  rotate.style.transform='rotate('+currentAngle+'deg)';
  alert(x.text);
   canclick=true;
    },3000);
      }