onload = function() {
    //离开网页的小提示
    let hour = new Date().getHours()
    let str = ''
    if (hour < 6) {
        str = '修仙中……'
    } else if (hour < 9) {
        str = '早上好！'
    } else if (hour < 12) {
        str = '上午好！'
    } else if (hour < 14) {
        str = '中午好！'
    } else if (hour < 17) {
        str = '下午好！'
    } else if (hour < 19) {
        str = '傍晚好！'
    } else if (hour < 22) {
        str = '晚上好！'
    } else {
        str = '夜深了，要早点休息哦！'
    }
 
    function c() {
        document.title = document[a] ? '㋡ Hi,小伙伴,' + str + '[' + d + ']' : d
    }
    //鼠标点击动画
    let a = document.title
    let b = document.title
    let d = document.title
    typeof document.hidden !== 'undefined' ? (a = 'hidden', b = 'visibilitychange') :
        typeof document.mozHidden !== 'undefined' ? (a = 'mozHidden', b = 'mozvisibilitychange') :
        typeof document.webkitHidden !== 'undefined' && (a = 'webkitHidden', b = 'webkitvisibilitychange')
    typeof document.addEventListener === 'undefined' && typeof document[a] === 'undefined' || document.addEventListener(b,
        c, !1)
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        switch (++click_cnt) {
            case 10:
                $elem.innerText = "OωO";
                break;
            case 20:
                $elem.innerText = "(๑•́ ∀ •̀๑)";
                break;
            case 30:
                $elem.innerText = "(๑•́ ₃ •̀๑)";
                break;
            case 40:
                $elem.innerText = "(๑•̀_•́๑)";
                break;
            case 50:
                $elem.innerText = "（￣へ￣）";
                break;
            case 60:
                $elem.innerText = "(╯°口°)╯(┴—┴";
                break;
            case 70:
                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
                break;
            case 80:
                $elem.innerText = "╮(｡>口<｡)╭";
                break;
            case 90:
                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                break;
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                $elem.innerText = "(ꐦ°᷄д°᷅)";
                break;
            default:
                $elem.innerText = "❤";
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function() {
            anim = setInterval(function() {
                if (++increase == 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};