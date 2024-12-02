function switchon(){
    let bulb = document.getElementById("bulb");
    bulb.src = "pic_bulbon.gif";
    let onbutton = document.getElementById("onbutton");
    onbutton.style.display = "none";
    let offbutton = document.getElementById("offbutton");
    offbutton.style.display = "block";

    let text = document.getElementById("message");
    text.innerHTML = "Bulb is now on";
    setTimeout(function() {
        text.innerText = "";
    }, 3000)
}

function switchoff(){
    let bulb = document.getElementById("bulb");
    bulb.src = "pic_bulboff.gif";
   
    let onbutton = document.getElementById("onbutton");
    onbutton.style.display = "block";
    let offbutton = document.getElementById("offbutton");
    offbutton.style.display = "none";

    let text = document.getElementById("message");
    text.innerHTML = "Bulb is now off";
    setTimeout(function() {
        text.innerText = "";
    }, 3000)
}