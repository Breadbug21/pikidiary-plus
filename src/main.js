let pikicoin = JSON.parse(localStorage.getItem("pikicoin"));

if (pikicoin) {
    pikicoin = pikicoin;
}
else {
    pikicoin = 0;
}

let clicked = 0;

// array for post ideas
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
    // idea checkbox
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


// adds the tab
var newtab = document.createElement('a');
newtab.innerHTML = 'PikiDiary+ ❤️';
newtab.classList.add("tab");
newtab.style.cursor = "pointer";
document.getElementsByClassName("tab-cont")[0].appendChild(newtab);

newtab.addEventListener("click", test);

function pikic() {
pikicoin++;
localStorage.setItem("pikicoin", JSON.stringify(pikicoin));
document.getElementById('pl').innerHTML = "Pikicoins:" + pikicoin;
}

function test() {


    
    var elem = document.querySelectorAll(".post");
    var i = 0, length = elem.length;
    for ( ; i < length; i++) {
        elem[i].style.display = "none";
    }

    if (clicked >= 10) {
        document.getElementsByClassName("pagination")[0].innerHTML = `
    <h1 id="plus">PikiDiary+ Beta</h1>
    <input id="idea" type="checkbox">post ideas</input>
    <br>
    <a href="https://stupid-idiots-united.github.io/website/confirm"><button>Send ping to counter so we can estimate how many people use PikiDiary+</button></a>
    <p id="luv">made with love by nomaakip, wish, and squirrel <3</p>
    <a href="https://github.com/Stupid-Idiots-United/pikidiary-plus-beta/issues/new?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen&template=Blank+issue"><button id="shh">secret</button></a>
    <h1 id="currency">PikiCoin Clicker (beta)</h1>
    <div id="cme"><img style="cursor:pointer;" height="50" width="55" id="pc" src="https://f.feridinha.com/vc9av.png"></div>
    <h2 id="pl"></h2>`;
    document.getElementById('pl').innerHTML = "Pikicoins:" + pikicoin;
    document.getElementById("cme").addEventListener("click", pikic);
    }
    else {
    clicked++;
    document.getElementsByClassName("pagination")[0].innerHTML = `
    <h1 id="plus">PikiDiary+ Beta</h1>
    <input id="idea" type="checkbox">post ideas</input>
    <br>
    <a href="https://stupid-idiots-united.github.io/website/confirm"><button>Send ping to counter so we can estimate how many people use PikiDiary+</button></a>
    <p id="luv">made with love by nomaakip, wish, and squirrel <3</p>
    <a href="https://github.com/Stupid-Idiots-United/pikidiary-plus-beta/issues/new?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen&template=Blank+issue"><button id="shh">secret</button></a>`;
    }




    
    const anim = [
        {opacity: "0"},
        {opacity: "1"}
    ]

    const animtiming = {
        duration: 200,
        iterations: 1
      };

      document.querySelectorAll(".tab.active")[0].classList.remove('active');

      newtab.classList.add('active');

      document.getElementsByClassName('pagination')[0].animate(anim, animtiming);


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


function see() {
    if (newtab.classList.contains('active')) {
        newtab.classList.remove('active');
        }
  
}


document.querySelectorAll(".tab")[0].addEventListener("click", see);
document.querySelectorAll(".tab")[1].addEventListener("click", see);
document.querySelectorAll(".tab")[2].addEventListener("click", see);
document.querySelectorAll(".tab")[3].addEventListener("click", see);

