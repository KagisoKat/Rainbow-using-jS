let btnRed = document.getElementById("red");
let btnOrange = document.getElementById("orange")
let btnYellow = document.getElementById("yellow");
let btnGreen = document.getElementById("green")
let btnBlue = document.getElementById("blue");
let btnIndigo = document.getElementById("indigo")
let btnViolet = document.getElementById("violet")

btnRed.addEventListener('click', function onClick(event) {
    if(document.getElementById("red").style.backgroundColor=="red") {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'red';  
    }
});

btnOrange.addEventListener('click', function onClick(event) {
    if(document.getElementById("orange").style.backgroundColor=="orange") {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'orange';  
    }
    
});
btnYellow.addEventListener('click', function onClick(event) {
    if(document.getElementById("yellow").style.backgroundColor=="yellow") {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'yellow';  
    }
    
});

btnGreen.addEventListener('click', function onClick(event) {
    if(document.getElementById("green").style.backgroundColor=="green") {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'green';  
    }
   
});

btnBlue.addEventListener('click', function onClick(event) {
    if(document.getElementById("blue").style.backgroundColor=="blue") {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'blue';  
    }
    
});

btnIndigo.addEventListener('click', function onClick(event) {
    if(document.getElementById("indigo").style.backgroundColor=="indigo") {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'indigo';  
    }
    
});

btnViolet.addEventListener('click', function onClick(event) {
    if(document.getElementById("violet").style.backgroundColor=="violet") {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'violet';  
    }
    
});




