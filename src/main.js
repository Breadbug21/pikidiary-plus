

function test() {

    var elem = document.querySelectorAll(".post");
    var i = 0, length = elem.length;
    for ( ; i < length; i++) {
        elem[i].style.display = "none";
    }

    document.getElementsByClassName("pagination")[0].innerHTML = '<h1>PikiDiary+ beta 0.1.5 early access</h1> <input id="idea" type="checkbox">post ideas</input> <p>made with love by nomaakip, wish, and squirrel <3</p>';
    
    if (ideac == "b") {
        swag.style.display = "block";
            document.getElementById('idea').checked = true;
        }
        if (ideac == "a") {
        swag.style.display = "none";
            document.getElementById('idea').checked = false;
        }

    document.getElementById('idea').addEventListener("click", ideae);

}


const greg = new Array();

greg[0] = "greg.site when";
greg[1] = "greg";
greg[2] = "i am steve";
greg[3] = "love yourself today";
greg[4] = "freaky";
greg[5] = "blahaj";
greg[6] = "hello chat";
greg[7] = "omfg pikidiary is so #swag and #monabased... peak";
greg[8] = "pikidiary my beloved";
greg[9] = "i fucking love pikidiary";

const rand = Math.floor(Math.random() * greg.length);

var swag = document.createElement('div');
swag.innerHTML = "Dont know what to post? Here's a Post idea: " + greg[rand];
document.getElementsByClassName("char-counter")[0].appendChild(swag);


var newtab = document.createElement('a');
newtab.innerHTML = 'PikiDiary+';
newtab.classList.add("tab");
newtab.style.cursor = "pointer";
document.getElementsByClassName("tab-cont")[0].appendChild(newtab);

newtab.addEventListener("click", test);

let ideac = localStorage.getItem("ideac");

if (ideac) {
    ideac = ideac;
    if (ideac == "b") {
    swag.style.display = "block";
    }
    if (ideac == "a") {
    swag.style.display = "none";
    }
}


else {
ideac = "b";
    swag.style.display = "block";
}

function ideae() {
    if (document.getElementById('idea').checked == true){
swag.style.display = "block";
        ideac = "b";
        localStorage.setItem("ideac", ideac);
} else {
swag.style.display = "none";
  ideac = "a";
  localStorage.setItem("ideac", ideac);
}
}




// I'm cumming and jorking it to this !!!