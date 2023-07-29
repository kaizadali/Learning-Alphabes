var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown",function(Event){
    makeSound(Event.key);
    buttonAnimation(buttonAnimation);
})

function makeSound(key){
    switch(key){
        case "A":
            var a=new Audio("/sounds/A.mp3");
            a.play();
            break;
        case "B":
            var b=new Audio("/sounds/B.mp3");
            b.play();
            break;
        case "C":
            var c=new Audio("/sounds/C.mp3");
            c.play();
            break;
        case "D":
            var d=new Audio("/sounds/D.mp3");
            d.play();
            break;
        case "E":
            var e=new Audio("/sounds/E.mp3");
            e.play();
            break;
        case "F":
            var f=new Audio("/sounds/F.mp3");
            f.play();
            break;
        case "G":
            var g=new Audio("/sounds/G.mp3");
            g.play();
            break;
        case "G":
            var g=new Audio("/sounds/G.mp3");
            g.play();
            break;
         case "H":
            var h=new Audio("/sounds/H.mp3");
            h.play();
            break;
         case "I":
            var i=new Audio("/sounds/I.mp3");
            i.play();
            break;
         case "J":
            var j=new Audio("/sounds/J.mp3");
            j.play();
            break;
         case "K":
            var k=new Audio("/sounds/K.mp3");
            k.play();
            break;
        case "L":
            var l=new Audio("/sounds/L.mp3");
            l.play();
            break;
        case "M":
            var m=new Audio("/sounds/M.mp3");
            m.play();
            break;
        
        case "N":
            var n=new Audio("/sounds/N.mp3");
            n.play();
            break;
        case "O":
            var o=new Audio("/sounds/O.mp3");
            o.play();
            break;
        case "P":
            var p=new Audio("/sounds/P .mp3");
            p.play();
            break;
        case "Q":
            var q=new Audio("/sounds/Q.mp3");
            q.play();
            break;

        case "R":
            var r=new Audio("/sounds/R.mp3");
            r.play();
            break;

        case "S":
            var s=new Audio("/sounds/S.mp3");
            s.play();
            break;

        case "T":
            var t=new Audio("/sounds/T.mp3");
            t.play();
            break;
        case "U":
            var u=new Audio("/sounds/U.mp3");
            u.play();
            break;
        case "V":
            var v=new Audio("/sounds/V.mp3");
            v.play();
            break;
        case "W":
            var w=new Audio("/sounds/W.mp3");
            w.play();
            break;
        case "X":
            var x=new Audio("/sounds/X.mp3");
            x.play();
            break;
        case "Y":
            var y=new Audio("/sounds/Y.mp3");
            y.play();
            break;
        case "Z":
            var z=new Audio("/sounds/Z.mp3");
            z.play();
            break;
        
    }
}
function buttonAnimation(Current){
    var activeButton=document.querySelector("."+Current);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }
    ,100);

    
}