document.getElementById('extra-achievements').style.display = 'block';
var imgc = document.createElement("div");

imgc.innerHTML = '<div style="display: flex; gap: 8px;"><img src="https://f.feridinha.com/CBjTc.jpg" style="width: 44px; height: 44px; box-sizing: border-box; border: solid 1px #CCC; padding: 2px;"><div style="display: flex; flex-direction: column;"><b style="font-size: 19px;">[Piki+] Lock & Key</b><span style="font-size: 11px;">This user found the secret in PikiDiary+!</span></div></div>';

document.getElementById('extra-achievements').appendChild(imgc);