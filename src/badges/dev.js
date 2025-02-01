document.getElementById('extra-achievements').style.display = 'flex';
    var imgb = document.createElement("div");

imgb.innerHTML = '<div style="display: flex; gap: 8px;"><img src="/img/appicon/icon-128x128.png" style="width: 44px; height: 44px; box-sizing: border-box; border: solid 1px #CCC; padding: 2px;"><div style="display: flex; flex-direction: column;"><b style="font-size: 19px;">[Piki+] #swag</b><span style="font-size: 11px;">PikiDiary+ developer</span></div></div>';

document.getElementById('extra-achievements').appendChild(imgb);
// this is for those little badges next to usernames (ex: verified)