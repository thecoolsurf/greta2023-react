/*
Pour obtenir la couleur en CSS des boutons
obj.getvalueCSS("btn1","background-color"));
*/

function getvalueCSS(sIdObj, styleProp) {
    var sResult = undefined, oEle = typeof (sIdObj) == "object" ? sIdObj : document.getElementById(sIdObj), oCss = null;
    if (window.getComputedStyle) {
        if (oEle.ownerDocument.defaultView.opener) {
            oCss = oEle.ownerDocument.defaultView.getComputedStyle(oEle, null);
        } else {
            oCss = window.getComputedStyle(oEle, null);
        }
        sResult = oCss.getPropertyValue(styleProp);
    } else if (document.documentElement.currentStyle) {
        oCss = oEle.currentStyle;
        if (typeof oCss.getPropertyValue != 'undefined') {
            sResult = oCss.getPropertyValue(styleProp);
        } else {
            sResult = oCss[styleProp];
        }
    }
    return sResult;
}

function createBubbles(color) {
    let tt = Math.round(Math.random(5)*50);
    let parent = document.getElementById('contain');
    let body = document.body;
    for (i=0; i<tt; i++) {
        let x = Math.round(Math.random(10)*100);
        let y = Math.round(Math.random(10)*200);
        let z = Math.round(Math.random(1)*50);
        let width = Math.round(Math.random(5)*20);
        let height = Math.round(Math.random(5)*20);
        let bubble = document.createElement('div');
        bubble.classList.add('bubbles');
        bubble.style.background = '#FFF';
        bubble.style.left = x+'px';
        bubble.style.top = y+'px';
        bubble.style.zIndex = z;
        bubble.style.width = width;
        bubble.style.height = height;
        body.append(bubble);
    }
}

let btnStart = document.getElementById('btn0');

btnStart.addEventListener('click', (e) => {
    // let color = getvalueCSS(this, "background-color");
    createBubbles('rgb(0,0,0)');
});

let btns = document.querySelectorAll('.container button');

for(btnColor of btns) {
    btnColor.addEventListener('Click', (e) => {
        // let color = getvalueCSS(btnColor, "background-color");
        let color = 'rgb(200,150,80)';
        // console.log(color);
        createBubbles(color);
    });
}