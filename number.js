console.log("Hi")
var use = [];
var arr = [];
var order = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var pngs = ["one.png","two.png","three.png","four.png","five.png","six.png","seven.png","eight.png","nine.png","ten.png","eleven.png","twelve.png","thirteen.png","fourteen.png","fifteen.png"]
var later = pngs;
const square = document.querySelectorAll(".square");
const extraList = document.querySelectorAll(".extra");

    square.forEach(classname => {
    classname.classList.remove("mole");
     });

order.sort(() => Math.random() - 0.5);
document.getElementById("1").style.backgroundImage='url('+pngs[0]+')';
document.getElementById("2").style.backgroundImage='url('+pngs[1]+')';
document.getElementById("3").style.backgroundImage='url('+pngs[2]+')';
document.getElementById("4").style.backgroundImage='url('+pngs[3]+')';
document.getElementById("5").style.backgroundImage='url('+pngs[4]+')';
document.getElementById("6").style.backgroundImage='url('+pngs[5]+')';
document.getElementById("7").style.backgroundImage='url('+pngs[6]+')';
document.getElementById("8").style.backgroundImage='url('+pngs[7]+')';
document.getElementById("9").style.backgroundImage='url('+pngs[8]+')';
document.getElementById("10").style.backgroundImage='url('+pngs[9]+')';
document.getElementById("11").style.backgroundImage='url('+pngs[10]+')';
document.getElementById("12").style.backgroundImage='url('+pngs[11]+')';
document.getElementById("13").style.backgroundImage='url('+pngs[12]+')';
document.getElementById("14").style.backgroundImage='url('+pngs[13]+')';
document.getElementById("15").style.backgroundImage='url('+pngs[14]+')';
document.getElementById("16").style.backgroundImage='url(sixteen.jpg)';

function check(){
    if(document.getElementById("1").style.backgroundImage=='url('+'"'+pngs[0]+'"'+')'&&
    document.getElementById("2").style.backgroundImage == 'url('+'"'+pngs[1]+'"'+')' &&
    document.getElementById("3").style.backgroundImage == 'url('+'"'+pngs[2]+'"'+')' &&
    document.getElementById("4").style.backgroundImage == 'url('+'"'+pngs[3]+'"'+')' &&
    document.getElementById("5").style.backgroundImage == 'url('+'"'+pngs[4]+'"'+')' &&
    document.getElementById("6").style.backgroundImage == 'url('+'"'+pngs[5]+'"'+')' &&
    document.getElementById("7").style.backgroundImage == 'url('+'"'+pngs[6]+'"'+')' &&
    document.getElementById("8").style.backgroundImage == 'url('+'"'+pngs[7]+'"'+')' &&
    document.getElementById("9").style.backgroundImage == 'url('+'"'+pngs[8]+'"'+')' &&
    document.getElementById("10").style.backgroundImage == 'url('+'"'+pngs[9]+'"'+')' &&
    document.getElementById("11").style.backgroundImage == 'url('+'"'+pngs[10]+'"'+')' &&
    document.getElementById("12").style.backgroundImage == 'url('+'"'+pngs[11]+'"'+')' &&
    document.getElementById("13").style.backgroundImage == 'url('+'"'+pngs[12]+'"'+')' &&
    document.getElementById("14").style.backgroundImage == 'url('+'"'+pngs[13]+'"'+')' &&
    document.getElementById("15").style.backgroundImage == 'url('+'"'+pngs[14]+'"'+')' &&
    document.getElementById("16").style.backgroundImage == 'url("sixteen.jpg")')
    {alert("Godd Job. You have finished the game. Thanks for playing 😃😃😃😃😃")}
}

    square[order[0]].style.backgroundImage = "url("+pngs[0]+")";
    square[order[1]].style.backgroundImage = "url("+pngs[1]+")";
    square[order[2]].style.backgroundImage = "url("+pngs[2]+")";
    square[order[3]].style.backgroundImage = "url("+pngs[3]+")";
    square[order[4]].style.backgroundImage = "url("+pngs[4]+")";
    square[order[5]].style.backgroundImage = "url("+pngs[5]+")";
    square[order[6]].style.backgroundImage = "url("+pngs[6]+")";
    square[order[7]].style.backgroundImage = "url("+pngs[7]+")";
    square[order[8]].style.backgroundImage = "url("+pngs[8]+")";
    square[order[9]].style.backgroundImage = "url("+pngs[9]+")";
    square[order[10]].style.backgroundImage = "url("+pngs[10]+")";
    square[order[11]].style.backgroundImage = "url("+pngs[11]+")";
    square[order[12]].style.backgroundImage = "url("+pngs[12]+")";
    square[order[13]].style.backgroundImage = "url("+pngs[13]+")";
    square[order[14]].style.backgroundImage = "url("+pngs[14]+")";


function clear(){
    square.forEach(id => {
        id.style.borderWidth = "thin";
    })
        extraList.forEach(id => {
        id.style.borderWidth = "thin";
    })

}

square.forEach(id => {
    id.style.borderWidth = "thin";
  id.addEventListener("mouseup", () => {
      if(arr.length==0){
    if(id.style.borderWidth == "thin"){id.style.borderWidth = "thick";}
      arr.push(id.id)
      use.push(id.id)}
        else{
        clear()
    id.style.borderWidth = "thick";use.push(id.id)
            };
  })
});

extraList.forEach(id => {
    id.style.borderWidth = "thin";
  id.addEventListener("mouseup", () => {
      if(arr.length==0){
    if(id.style.borderWidth == "thin"){id.style.borderWidth = "thick";}
      arr.push(id.id)
      use.push(id.id)}
        else{
        clear()
    id.style.borderWidth = "thick";use.push(id.id)
            };
  })
});


function right(){
  var num = use[use.length-1];
    if(num==1 && document.getElementById("2").style.backgroundImage==""){ 
var middle = document.getElementById("2").style.backgroundImage;
document.getElementById("2").style.backgroundImage= document.getElementById("1").style.backgroundImage
document.getElementById("1").style.backgroundImage=middle;
    }
    
    if(num==2 && document.getElementById("3").style.backgroundImage==""){ 
var middle = document.getElementById("3").style.backgroundImage;
document.getElementById("3").style.backgroundImage= document.getElementById("2").style.backgroundImage
document.getElementById("2").style.backgroundImage=middle;
    }
    
    if(num==3 && document.getElementById("4").style.backgroundImage==""){ 
var middle = document.getElementById("4").style.backgroundImage;
document.getElementById("4").style.backgroundImage= document.getElementById("3").style.backgroundImage;
document.getElementById("3").style.backgroundImage=middle;
    }
    
    if(num==5 && document.getElementById("6").style.backgroundImage==""){ 
var middle = document.getElementById("6").style.backgroundImage;
document.getElementById("6").style.backgroundImage= document.getElementById("5").style.backgroundImage;
document.getElementById("5").style.backgroundImage=middle;
    }
    if(num==6 && document.getElementById("7").style.backgroundImage==""){ 
var middle = document.getElementById("7").style.backgroundImage;
document.getElementById("7").style.backgroundImage= document.getElementById("6").style.backgroundImage;
document.getElementById("6").style.backgroundImage=middle;
    }
    if(num==7 && document.getElementById("8").style.backgroundImage==""){ 
var middle = document.getElementById("8").style.backgroundImage;
document.getElementById("8").style.backgroundImage= document.getElementById("7").style.backgroundImage;
document.getElementById("7").style.backgroundImage=middle;
    }
    if(num==9 && document.getElementById("10").style.backgroundImage==""){ 
var middle = document.getElementById("10").style.backgroundImage;
document.getElementById("10").style.backgroundImage= document.getElementById("9").style.backgroundImage
document.getElementById("9").style.backgroundImage=middle;
    }if(num==10 && document.getElementById("11").style.backgroundImage==""){ 
var middle = document.getElementById("11").style.backgroundImage;
document.getElementById("11").style.backgroundImage= document.getElementById("10").style.backgroundImage
document.getElementById("10").style.backgroundImage=middle;
    }if(num==11 && document.getElementById("12").style.backgroundImage==""){ 
var middle = document.getElementById("12").style.backgroundImage;
document.getElementById("12").style.backgroundImage= document.getElementById("11").style.backgroundImage
document.getElementById("11").style.backgroundImage=middle;
    }if(num==13 && document.getElementById("14").style.backgroundImage==""){ 
var middle = document.getElementById("14").style.backgroundImage;
document.getElementById("14").style.backgroundImage= document.getElementById("13").style.backgroundImage
document.getElementById("13").style.backgroundImage=middle;
    }
    if(num==14 && document.getElementById("15").style.backgroundImage==""){ 
var middle = document.getElementById("15").style.backgroundImage;
document.getElementById("15").style.backgroundImage= document.getElementById("14").style.backgroundImage
document.getElementById("14").style.backgroundImage=middle;
    }
    if(num==15 && document.getElementById("16").style.backgroundImage==""){ 
var middle = document.getElementById("16").style.backgroundImage;
document.getElementById("16").style.backgroundImage= document.getElementById("15").style.backgroundImage
document.getElementById("15").style.backgroundImage=middle;
    }
}

function left(){
      var num = use[use.length-1];
    if(num==16 && document.getElementById("15").style.backgroundImage==""){ 
var middle = document.getElementById("15").style.backgroundImage;
document.getElementById("15").style.backgroundImage= document.getElementById("16").style.backgroundImage
document.getElementById("16").style.backgroundImage=middle;
    }
    
    if(num==2 && document.getElementById("1").style.backgroundImage==""){ 
var middle = document.getElementById("1").style.backgroundImage;
document.getElementById("1").style.backgroundImage= document.getElementById("2").style.backgroundImage
document.getElementById("2").style.backgroundImage=middle;
    }
    
    if(num==3 && document.getElementById("2").style.backgroundImage==""){ 
var middle = document.getElementById("2").style.backgroundImage;
document.getElementById("2").style.backgroundImage= document.getElementById("3").style.backgroundImage;
document.getElementById("3").style.backgroundImage=middle;
    }
    
    if(num==4 && document.getElementById("3").style.backgroundImage==""){ 
var middle = document.getElementById("3").style.backgroundImage;
document.getElementById("3").style.backgroundImage= document.getElementById("4").style.backgroundImage;
document.getElementById("4").style.backgroundImage=middle;
    }
    if(num==6 && document.getElementById("5").style.backgroundImage==""){ 
var middle = document.getElementById("5").style.backgroundImage;
document.getElementById("5").style.backgroundImage= document.getElementById("6").style.backgroundImage;
document.getElementById("6").style.backgroundImage=middle;
    }
    if(num==7 && document.getElementById("6").style.backgroundImage==""){ 
var middle = document.getElementById("6").style.backgroundImage;
document.getElementById("6").style.backgroundImage= document.getElementById("7").style.backgroundImage;
document.getElementById("7").style.backgroundImage=middle;
    }
    if(num==8 && document.getElementById("7").style.backgroundImage==""){ 
var middle = document.getElementById("7").style.backgroundImage;
document.getElementById("7").style.backgroundImage= document.getElementById("8").style.backgroundImage
document.getElementById("8").style.backgroundImage=middle;
    }if(num==10 && document.getElementById("9").style.backgroundImage==""){ 
var middle = document.getElementById("9").style.backgroundImage;
document.getElementById("9").style.backgroundImage= document.getElementById("10").style.backgroundImage
document.getElementById("10").style.backgroundImage=middle;
    }if(num==11 && document.getElementById("10").style.backgroundImage==""){ 
var middle = document.getElementById("10").style.backgroundImage;
document.getElementById("10").style.backgroundImage= document.getElementById("11").style.backgroundImage
document.getElementById("11").style.backgroundImage=middle;
    }if(num==12 && document.getElementById("11").style.backgroundImage==""){ 
var middle = document.getElementById("11").style.backgroundImage;
document.getElementById("11").style.backgroundImage= document.getElementById("12").style.backgroundImage
document.getElementById("12").style.backgroundImage=middle;
    }
    if(num==14 && document.getElementById("13").style.backgroundImage==""){ 
var middle = document.getElementById("13").style.backgroundImage;
document.getElementById("13").style.backgroundImage= document.getElementById("14").style.backgroundImage
document.getElementById("14").style.backgroundImage=middle;
    }
    if(num==15 && document.getElementById("14").style.backgroundImage==""){ 
var middle = document.getElementById("14").style.backgroundImage;
document.getElementById("14").style.backgroundImage= document.getElementById("15").style.backgroundImage
document.getElementById("15").style.backgroundImage=middle;
    }
}


function up(){    
  var num = use[use.length-1];
    
    if(num==17){ 
var middle = document.getElementById("16").style.backgroundImage;
document.getElementById("16").style.backgroundImage= document.getElementById("17").style.backgroundImage
document.getElementById("17").style.backgroundImage=middle;
    }
    if(num==16){ 
var middle = document.getElementById("12").style.backgroundImage;
document.getElementById("12").style.backgroundImage= document.getElementById("16").style.backgroundImage
document.getElementById("16").style.backgroundImage=middle;
    }
    if(num==5 && document.getElementById("1").style.backgroundImage==""){ 
var middle = document.getElementById("1").style.backgroundImage;
document.getElementById("1").style.backgroundImage= document.getElementById("5").style.backgroundImage;
document.getElementById("5").style.backgroundImage=middle;
    }
    
    if(num==6 && document.getElementById("2").style.backgroundImage==""){ 
var middle = document.getElementById("2").style.backgroundImage;
document.getElementById("2").style.backgroundImage= document.getElementById("6").style.backgroundImage;
document.getElementById("6").style.backgroundImage=middle;
    }
    if(num==7 && document.getElementById("3").style.backgroundImage==""){ 
var middle = document.getElementById("3").style.backgroundImage;
document.getElementById("3").style.backgroundImage= document.getElementById("7").style.backgroundImage;
document.getElementById("7").style.backgroundImage=middle;
    }    
    if(num==8 && document.getElementById("4").style.backgroundImage==""){ 
var middle = document.getElementById("4").style.backgroundImage;
document.getElementById("4").style.backgroundImage= document.getElementById("8").style.backgroundImage
document.getElementById("8").style.backgroundImage=middle;
    }
    if(num==9 && document.getElementById("5").style.backgroundImage==""){ 
var middle = document.getElementById("5").style.backgroundImage;
document.getElementById("5").style.backgroundImage= document.getElementById("9").style.backgroundImage
document.getElementById("9").style.backgroundImage=middle;
    }if(num==10 && document.getElementById("6").style.backgroundImage==""){ 
var middle = document.getElementById("6").style.backgroundImage;
document.getElementById("6").style.backgroundImage= document.getElementById("10").style.backgroundImage
document.getElementById("10").style.backgroundImage=middle;
    }if(num==11 && document.getElementById("7").style.backgroundImage==""){ 
var middle = document.getElementById("7").style.backgroundImage;
document.getElementById("7").style.backgroundImage= document.getElementById("11").style.backgroundImage
document.getElementById("11").style.backgroundImage=middle;
    }
    if(num==12 && document.getElementById("8").style.backgroundImage==""){ 
var middle = document.getElementById("8").style.backgroundImage;
document.getElementById("8").style.backgroundImage= document.getElementById("12").style.backgroundImage
document.getElementById("12").style.backgroundImage=middle;
    }if(num==13 && document.getElementById("9").style.backgroundImage==""){ 
var middle = document.getElementById("9").style.backgroundImage;
document.getElementById("9").style.backgroundImage= document.getElementById("13").style.backgroundImage
document.getElementById("13").style.backgroundImage=middle;
    }
    if(num==14 && document.getElementById("10").style.backgroundImage==""){ 
var middle = document.getElementById("10").style.backgroundImage;
document.getElementById("10").style.backgroundImage= document.getElementById("14").style.backgroundImage
document.getElementById("14").style.backgroundImage=middle;
    }
    if(num==15 && document.getElementById("11").style.backgroundImage==""){ 
var middle = document.getElementById("11").style.backgroundImage;
document.getElementById("11").style.backgroundImage= document.getElementById("15").style.backgroundImage
document.getElementById("15").style.backgroundImage=middle;
    }
    if(num==16 && document.getElementById("12").style.backgroundImage==""){ 
var middle = document.getElementById("12").style.backgroundImage;
document.getElementById("12").style.backgroundImage= document.getElementById("16").style.backgroundImage
document.getElementById("16").style.backgroundImage=middle;
    }
}

function down(){    
  var num = use[use.length-1];
    
    if(num==16 && document.getElementById("17").style.backgroundImage==""){ 
var middle = document.getElementById("17").style.backgroundImage;
document.getElementById("17").style.backgroundImage= document.getElementById("16").style.backgroundImage;
document.getElementById("16").style.backgroundImage=middle;
    }
    if(num==5 && document.getElementById("9").style.backgroundImage==""){ 
var middle = document.getElementById("9").style.backgroundImage;
document.getElementById("9").style.backgroundImage= document.getElementById("5").style.backgroundImage;
document.getElementById("5").style.backgroundImage=middle;
    }
    
    if(num==6 && document.getElementById("10").style.backgroundImage==""){ 
var middle = document.getElementById("10").style.backgroundImage;
document.getElementById("10").style.backgroundImage= document.getElementById("6").style.backgroundImage;
document.getElementById("6").style.backgroundImage=middle;
    }
    if(num==7 && document.getElementById("11").style.backgroundImage==""){ 
var middle = document.getElementById("11").style.backgroundImage;
document.getElementById("11").style.backgroundImage= document.getElementById("7").style.backgroundImage;
document.getElementById("7").style.backgroundImage=middle;
    }    
    if(num==8 && document.getElementById("12").style.backgroundImage==""){ 
var middle = document.getElementById("12").style.backgroundImage;
document.getElementById("12").style.backgroundImage= document.getElementById("8").style.backgroundImage
document.getElementById("8").style.backgroundImage=middle;
    }
    if(num==9 && document.getElementById("13").style.backgroundImage==""){ 
var middle = document.getElementById("13").style.backgroundImage;
document.getElementById("13").style.backgroundImage= document.getElementById("9").style.backgroundImage
document.getElementById("9").style.backgroundImage=middle;
    }if(num==10 && document.getElementById("14").style.backgroundImage==""){ 
var middle = document.getElementById("14").style.backgroundImage;
document.getElementById("14").style.backgroundImage= document.getElementById("10").style.backgroundImage
document.getElementById("10").style.backgroundImage=middle;
    }if(num==11 && document.getElementById("15").style.backgroundImage==""){ 
var middle = document.getElementById("15").style.backgroundImage;
document.getElementById("15").style.backgroundImage= document.getElementById("11").style.backgroundImage
document.getElementById("11").style.backgroundImage=middle;
    }
    if(num==12 && document.getElementById("16").style.backgroundImage==""){ 
var middle = document.getElementById("16").style.backgroundImage;
document.getElementById("16").style.backgroundImage= document.getElementById("12").style.backgroundImage
document.getElementById("12").style.backgroundImage=middle;
    }if(num==1 && document.getElementById("5").style.backgroundImage==""){ 
var middle = document.getElementById("5").style.backgroundImage;
document.getElementById("5").style.backgroundImage= document.getElementById("1").style.backgroundImage
document.getElementById("1").style.backgroundImage=middle;
    }
    if(num==2 && document.getElementById("6").style.backgroundImage==""){ 
var middle = document.getElementById("6").style.backgroundImage;
document.getElementById("6").style.backgroundImage= document.getElementById("2").style.backgroundImage
document.getElementById("2").style.backgroundImage=middle;
    }
    if(num==3 && document.getElementById("7").style.backgroundImage==""){ 
var middle = document.getElementById("7").style.backgroundImage;
document.getElementById("7").style.backgroundImage= document.getElementById("3").style.backgroundImage
document.getElementById("3").style.backgroundImage=middle;
    }
    if(num==4 && document.getElementById("8").style.backgroundImage==""){ 
var middle = document.getElementById("8").style.backgroundImage;
document.getElementById("8").style.backgroundImage= document.getElementById("4").style.backgroundImage
document.getElementById("4").style.backgroundImage=middle;
    }
}