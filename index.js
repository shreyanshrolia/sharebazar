var randeck = [];
var carddeck=[];
var cardtype=["H","S","C","D"];
var counter=0;
for(var i=1;i<=13;i++)
{
  for(var x=0;x<=3;x++)
  {
    var imgname=i+cardtype[x]+".png";
    carddeck.push(imgname);
  }
}
while(randeck.length < 52){
    var r = Math.floor(Math.random() * 52);
    if(randeck.indexOf(r) === -1) randeck.push(r);
}

$("button").click(function (){
    if(counter<52)
    {
    var imgname="images/"+carddeck[randeck[counter]];
    counter++;
     $("button").text("Next Card");
     $("h3").text("Card No : "+counter);
     $("#pcard").fadeOut();
     $("#pcard").fadeIn();
     setTimeout(function (){ $("#pcard").attr("src",imgname); },400);
     addcard(imgname);
   }
   else if(counter==53)
   {
     $("button").text("START");
     $(".inside").remove();
     counter=0;
     $("h3").text("COUNTER");
     $("#pcard").attr("src","images/blue_back.png");
   }
   else
   {
     $("button").text("Restart");
     counter++
   }

});
function addcard(imagename)
{
  var str="<img class='inside' src='"+imagename+"'>";
  $(".bottom").append(str);
}

function cardanimate()
{

  // var degr="rotate("+i+"deg)";

  for(var i=1;i<=50;i++)
  {
     setTimeout(function (){
      var degr="rotate("+i+"deg)";
      document.querySelector("img").style.transform=degr;
    },1000);
  }
}
 // console.log(carddeck);
