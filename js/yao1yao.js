/**
 * Created by Palov on 2017/5/4.
 */
var animateStart = animateStop = fangfaStep1 = fangfaStep2 = fangfaStep3 = null;
/*var myWidth = document.getElementsByTagName("body")[0].clientWidth;
 document.getElementsByTagName("body")[0].style.height = 2.2 * myWidth + 'px';*/
/*可替换部分设置*/
/*document.querySelector(".mySpan").style.fontSize = 0.03 * myWidth + 'px';*/

//获取加速度信息
//通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
//而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
var SHAKE_THRESHOLD = 4000;
var last_update = 0;
var x, y, z, last_x = 0, last_y = 0, last_z = 0;
function deviceMotionHandler(eventData) {
    var acceleration = eventData.accelerationIncludingGravity;
    var curTime = new Date().getTime();
    if ((curTime - last_update) > 10) {
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        if (speed > SHAKE_THRESHOLD) {
            navigator.vibrate(1000);
            document.querySelector(".myCover").setAttribute('class', 'myCover animated fadeOut');
            getTheAward();
            StartMyPage();
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}

setTimeout(function () {
    document.querySelector(".myCover").setAttribute('class', 'myCover animated fadeOut');
    getTheAward();
    StartMyPage();
}, 5000);

function StartMyPage() {
    setTimeout(function () {
        document.querySelector(".myBGImg2").setAttribute('class', 'myBGImg myBGImg2 animated backgroundUp');
        setTimeout(function () {
            document.querySelector(".myBGImg1").setAttribute('class', 'myBGImg myBGImg1 animated backgroundUp');
            document.querySelector(".jiangliBg").setAttribute('class', 'myAbsolute jiangliBg animated bounceInUp');
        }, 150);
    }, 200);
}

function getTheAward() {
    var myAwardID = Math.round(Math.random() * 100);
    var chars = ['0', '100', '2', '98', '5', '95', '10', '90'];
    /*中奖几率分别为：特等奖：1/99；一等奖：4/99；二等奖:6/99；三等奖：10/99*/
    var strTitle, strText;
    if (myAwardID < chars[7] && myAwardID > chars[6]) {
        strTitle = '很遗憾';
        strText = '您没有获得奖项';
    } else {
        strTitle = '恭喜您获得了:';
        if (myAwardID <= chars[0] || myAwardID >= chars[1]) {
            strText = '特等奖';
        } else if (myAwardID <= chars[2] || myAwardID >= chars[3]) {
            strText = '一等奖';
        } else if (myAwardID <= chars[4] || myAwardID >= chars[5]) {
            strText = '二等奖';
        } else {
            strText = '三等奖';
        }
    }
    document.querySelector('.jiangliBg').getElementsByTagName('span')[0].innerText = strTitle;
    document.querySelector('.jiangliBg').getElementsByTagName('p')[0].innerText = strText;
}