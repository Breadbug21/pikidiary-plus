// ==UserScript==
// @name         PikiDiary+
// @namespace    http://tampermonkey.net/
// @version      2025-02-01
// @description  PikiDiary+ Beta
// @author       Nomaakip & Stupid Idiots United
// @match        *://*.pikidiary.lol/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pikidiary.lol
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let ideac = true;

    function test() {
        //document.getElementsByClassName("posts")[0].style.display = "none";
        //document.getElementsByClassName("pagination")[0].innerHTML = '<h1>PikiDiary+ beta 0.0.6(localstorage soon)</h1> <input id="idea" type="checkbox">post ideas</input>';
        //document.getElementById('idea').checked = true;
        //document.getElementById('idea').addEventListener("click", ideae);
        window.location.href = "https://stupid-idiots-united.github.io/website/PikiPlus.html";
    }

    function ideae() {
        if (document.getElementById('idea').checked == true){
    swag.style.display = "block";
            ideac = true;
  } else {
    swag.style.display = "none";
      ideac = false;
  }
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

    const rand = Math.floor(Math.random() * greg.length);

    var swag = document.createElement('div');
    swag.innerHTML = "post idea: " + greg[rand];
    document.getElementsByClassName("char-counter")[0].appendChild(swag);


    var newtab = document.createElement('a');
    newtab.innerHTML = 'PikiDiary+';
    newtab.classList.add("tab");
    newtab.style.cursor = "pointer";
    document.getElementsByClassName("tab-cont")[0].appendChild(newtab);

    newtab.addEventListener("click", test);

})();
