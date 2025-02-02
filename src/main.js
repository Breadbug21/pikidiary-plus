
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

function test() {

    var elem = document.querySelectorAll(".post");
    var i = 0, length = elem.length;
    for ( ; i < length; i++) {
        elem[i].style.display = "none";
    }

    document.getElementsByClassName("pagination")[0].innerHTML = `
    <h1 id="plus">PikiDiary+ Beta</h1>
    <input id="idea" type="checkbox">post ideas</input>
    <p id="luv">made with love by nomaakip, wish, and squirrel <3</p>
    <a href="https://github.com/Stupid-Idiots-United/pikidiary-plus-beta/issues/new?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen&template=Blank+issue"><button id="shh">secret</button></a>`;

    
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


