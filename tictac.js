let player,b1,b2,b3,b4,b5,b6,b7,b8,b9

function swap(a)
{
    if(a!=" "){
        alert("Please select another Tile")
    }
    else{
        if(player==null)
        {
           player='X' 
           document.getElementById("para").style.color='red';
           document.getElementById("para").innerText="Player 2 Turn";

        }
        else if(player=='X'){
            player='O'
            document.getElementById("para").innerText="Player 1 Turn";
           document.getElementById("para").style.color='blue';

        }
        else{
            player='X'
            document.getElementById("para").innerText="Player 2 Turn";
           document.getElementById("para").style.color='red';

        }
    }
}
function win()
{         
    if(((b1==b2 && b2==b3) && (b1!=null && b2!=null && b3!=null)) || ((b4==b5 && b5==b6) && (b4!=null && b5!=null && b6!=null)) || ((b7==b8 && b8==b9) && (b7!=null && b8!=null && b9!=null)) || ((b1==b4 && b4==b7) && (b1!=null && b4!=null && b7!=null)) || ((b2==b5 && b5==b8) && (b2!=null && b5!=null && b8!=null)) || ((b3==b6 && b6==b9) && (b3!=null && b6!=null && b9!=null)) || ((b1==b5 && b5==b9) && (b1!=null && b5!=null && b9!=null)) || ((b3==b5 && b5==b7) && (b3!=null && b5!=null && b7!=null)))
    {
       if(player=='X'){ 
          document.getElementById("para").innerText="Player 1  Win";
          alert("Player 1 Win")
          setTimeout(() => {
            location.reload()
        }, 1000);
       }
       else{
          document.getElementById("para").innerText="Player 2  Win";
          alert("Player 2 Win")
          setTimeout(() => {
            location.reload()
        }, 1000);
       }
    }
    else{
        return false;
    }
 } 
 function draw(){
        if((b1!=null && b2!=null && b3!=null && b4!=null && b5!=null && b6!=null && b7!=null && b8!=null && b9!=null) && (win()==false))
        {
            document.getElementById("para").innerText="Match Draw!Reset";   
        }
 }
function a1()
{
    a=document.getElementById("1").value;
    swap(a)
    document.getElementById("1").value=player;
    b1=player
    win()
    draw()
}
function a2()
{
    
    a=document.getElementById("2").value;
    swap(a)
    document.getElementById("2").value=player;
    b2=player
    win()
    draw()

}
function a3()
{
    var a=document.getElementById("3").value;
    swap(a)
    document.getElementById("3").value=player;
    b3=player
    win()
    draw()

}
function a4()
{
    var a=document.getElementById("4").value;
    swap(a)
    document.getElementById("4").value=player;
    b4=player
    win()
    draw()

}
function a5()
{
    var a=document.getElementById("5").value;
    swap(a)
    document.getElementById("5").value=player;
    b5=player
    win()
    draw()

}
function a6()
{
    var a=document.getElementById("6").value;
    swap(a)
    document.getElementById("6").value=player;
    b6=player
    win()
    draw()

}
function a7()
{
  
    var a=document.getElementById("7").value;
    swap(a)
    document.getElementById("7").value=player;
    b7=player
    win()
    draw()

}
function a8()
{
    var a=document.getElementById("8").value;
    swap(a)
    document.getElementById("8").value=player;
    b8=player
    win()
    draw()
   
}
function a9()
{
    var a=document.getElementById("9").value;
    swap(a)
    document.getElementById("9").value=player;
    b9=player
    win()
    draw()
    
}