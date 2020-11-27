var diceNum = 1;
var diceNum2 = 6;
var count = 5;
var time = 0;


function throwDice() {
count = count - 1;

if(count != 0) { 
    // picture 1
    diceNum = diceNum+1;
    if(diceNum == 7) {
        diceNum = 1;
    }
    var imgsrc = document.getElementsByTagName("img")[0];
    var str = "dice"+diceNum+".gif";
    imgsrc.src = str;
    
    // picture 1
    diceNum2 = diceNum2 - 1;
    if(diceNum2 == 0) {
        diceNum2 = 6;
    }
    var imgsrc2 = document.getElementsByTagName("img")[1];
    var str2 = "dice"+diceNum2+".gif";
    imgsrc2.src = str2;
}
else if(count==0){
    clearInterval(time);
    // 난수 생성
    var num = Math.floor(Math.random()*6)+1;
    var num2 = Math.floor(Math.random()*6)+1;
    //alert(num + " " + num2);
    
    // 주사위1바꾸기
    var imgsrc = document.getElementsByTagName("img")[0];
    var str = "dice"+num+".gif";
    imgsrc.src = str;
    
    // 주사위2 바꾸기
    var imgsrc2 = document.getElementsByTagName("img")[1];
    var str2 = "dice"+num2+".gif";
    imgsrc2.src = str2;
    
    
}

}
function randomDice() {
count = 10;
clearInterval(time);
time = setInterval("throwDice()",50);

}


