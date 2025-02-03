//this code is gonna make me fucking depressed

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
greg[10] = "say gex is peak"

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
// the starred tab
var starTab = document.createElement('a');
starTab.innerHTML = 'Starred';
starTab.classList.add("tab");
starTab.style.cursor = "pointer";
document.getElementsByClassName("tab-cont")[0].appendChild(starTab);
starTab.addEventListener("click", StarTab);

var seperator = document.createElement('div');
seperator.innerHTML = "<p><b>|</b></p>";
seperator.style = "margin-top: -4px;";
document.getElementsByClassName("tab-cont")[0].appendChild(seperator);

// adds the tab
var newtab = document.createElement('a');
newtab.innerHTML = 'PikiDiary+ ❤️';
newtab.classList.add("tab");
newtab.style = "margin-top: -3px; cursor: pointer;";
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
    <input id="starr" type="checkbox">Star Posts [BETA]</input>
    <br>
    <a href="https://stupid-idiots-united.github.io/website/confirm"><button>Send ping to counter so we can estimate how many people use PikiDiary+</button></a>
    <p id="luv">made with love by nomaakip (@hacks.guide), wish (@wish), squirrel (@squirrel), and names (@names)<3</p>
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
    <input id="starr" type="checkbox">Star Posts [BETA]</input>
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


      
    if (starredd == 'a') {
            document.getElementById('starr').checked = true;
    }
    if (starredd == 'b') {
        document.getElementById('starr').checked = false;
    }
    

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
    document.getElementById('starr').addEventListener("click", StarSettings);
}


function see() {
    if (newtab.classList.contains('active')) {
        newtab.classList.remove('active');
        }
        
}

function StarSettings() {
    let starButton = document.getElementById('starfrfr');
    if (document.getElementById('starr').checked == true) {
        starredd = 'a';
        localStorage.setItem("starredd", JSON.stringify(starredd));
        starTab.style.display = 'block';
        starButton.style.display = 'block';
    }
    else {
        starredd = 'b';
        localStorage.setItem("starredd", JSON.stringify(starredd));
        document.querySelectorAll('#starfrfr').forEach(star => {
            starTab.style.display = 'none';
        star.style.display = 'none';
        });
    }
}


document.querySelectorAll(".tab")[0].addEventListener("click", see);
document.querySelectorAll(".tab")[1].addEventListener("click", see);
document.querySelectorAll(".tab")[2].addEventListener("click", see);
document.querySelectorAll(".tab")[3].addEventListener("click", see);




const targetString = "023";

const textFileURL = "https://raw.githubusercontent.com/Stupid-Idiots-United/pikidiary-plus/refs/heads/main/update/version.txt";

async function verc() {
    try {
        const response = await fetch(textFileURL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const textContent = await response.text();

        const trimmedText = textContent.trim();

        if (trimmedText === targetString) {
            console.log("No updates avaiable.");
        } else {
            console.log("An update is avaiable.");
            const ye = document.createElement('h1');
            ye.innerHTML = 'An update is available! Please download it <a href="https://github.com/Stupid-Idiots-United/pikidiary-plus"> here.</a>';
            ye.style.display = "block";
            document.getElementsByClassName('char-counter')[0].appendChild(ye);
        }
    } catch (error) {
        console.error("Error fetching or comparing the text:", error);
    }
}


verc();


if (pikicoin >= 1000) {
    document.getElementById('extra-achievements').style.display = 'block';
    var imgd = document.createElement("div");

imgd.innerHTML = '<div style="display: flex; gap: 8px;"><img src="https://f.feridinha.com/vc9av.png" style="width: 44px; height: 44px; box-sizing: border-box; border: solid 1px #CCC; padding: 2px;"><div style="display: flex; flex-direction: column;"><b style="font-size: 19px;">[Piki+] #rich</b><span style="font-size: 11px;">Have more than 1000 pikicoins</span></div></div><br>';

document.getElementById('extra-achievements').appendChild(imgd);
}





function StarTab() {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove('active'));
    starTab.classList.add('active');
    document.querySelectorAll(".post").forEach(post => post.style.display = "none");

    let starredPosts = JSON.parse(localStorage.getItem("starredPosts")) || [];
    document.querySelectorAll(".post").forEach(post => {
        if (starredPosts.includes(post.id)) {
            post.style.display = "block";
            let starButton = post.querySelector(".star-button");
            if (starButton) {
                starButton.innerHTML = '<img src="https://f.feridinha.com/6uoUR.png" style="background: none; border: none; filter: grayscale(0%);">';
            }
        }
    });

    document.getElementsByClassName('pagination')[0].animate([{ opacity: "0" }, { opacity: "1" }], { duration: 200 });
}


document.querySelectorAll('.post').forEach(post => {
    let starButton = document.createElement("button");
    starButton.classList.add('star-button');
    starButton.innerHTML = '<img src="https://f.feridinha.com/6uoUR.png" style="background: none; border: none; padding: 0; padding-top: 4px; filter: grayscale(100%); transition: filter 0.3s;">';
    starButton.style.cursor = "pointer";
    starButton.style.background = "none";
    starButton.style.border = "none";
    starButton.id = "starfrfr";


    if (!post.id) post.id = "post-" + Math.random().toString(36).substr(2, 9);


    let starredPosts = JSON.parse(localStorage.getItem("starredPosts")) || [];
    if (starredPosts.includes(post.id)) {
        starButton.innerHTML = '<img src="https://f.feridinha.com/6uoUR.png" style="background: none; border: none; filter: grayscale(0%);">';
    }


    starButton.addEventListener("click", () => {
        toggleStar(post.id, starButton);
    });

    let postActions = post.querySelector('.post-actions');
    if (postActions) {
        postActions.appendChild(starButton);
    }
});


function toggleStar(postId, starButton) {
    let starredPosts = JSON.parse(localStorage.getItem("starredPosts")) || [];
    if (starredPosts.includes(postId)) {
        starredPosts = starredPosts.filter(id => id !== postId);
        starButton.innerHTML = '<img src="https://f.feridinha.com/6uoUR.png" style="background: none; border: none; filter: grayscale(100%); transition: filter 0.3s;">';
    } else {
        starredPosts.push(postId);
        starButton.innerHTML = '<img src="https://f.feridinha.com/6uoUR.png" style="background: none; border: none; filter: grayscale(0%);">';
    }
    localStorage.setItem("starredPosts", JSON.stringify(starredPosts));
}

let starredd = JSON.parse(localStorage.getItem("starredd"));

    if (starredd) {
        starredd = starredd;
        let starButton = document.getElementById('starfrfr');
    if (starredd == 'b') {
        document.querySelectorAll('#starfrfr').forEach(star => {
            starTab.style.display = 'none';
        star.style.display = 'none';
        });
    }
    if (starredd == 'a') {
        starTab.style.display = 'block';
        starButton.style.display = 'block';
    }
}


else {
    starredd = 'a';
    let starButton = document.getElementById('starfrfr');
        starTab.style.display = 'block';
        starButton.style.display = 'block';
    }


