let size=20
function DoStuff(){
    document.getElementById("input").innerText='+5px';
    if(size>100){
        size=20;

    }

    document.getElementById("Text").style.fontSize=size+'px';
    document.getElementById("Text").innerText=size+'px';
    
    size+=5;
    if(size>100){
        
        document.getElementById("input").innerText='-80px';

    }

}