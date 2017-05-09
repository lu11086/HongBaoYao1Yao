/**
 * Created by Palov on 2017/5/4.
 */
var animateStart = animateStop = fangfaStep1 = fangfaStep2 = fangfaStep3 = null;
/*var myWidth = document.getElementsByTagName("body")[0].clientWidth;
 document.getElementsByTagName("body")[0].style.height = 2.2 * myWidth + 'px';*/
/*可替换部分设置*/
/*document.querySelector(".mySpan").style.fontSize = 0.03 * myWidth + 'px';*/
imgLoader(['img/background.jpg',  'img/9.12-9.14日每天上午10点.png', 'img/10红包.png', 'img/66红包.png', 'img/88红包.png', 'img/红包.png', 'img/摇一摇.png', 'img/元宝.png', 'img/圆钱.png', 'img/摇一摇·手.png', 'img/new-bg.jpg', 'img/BG02.png'], function (percentage) {
    var percentT = percentage * 100;
    document.querySelector(".myCoverSpan").innerText = 'Loading ' + (parseInt(percentT)) + '%';
    document.querySelector(".myCoverSpanLine").style.width = percentT + '%';
    if (percentage == 1) {
        document.querySelector(".myCoverSpan").innerText = '请摇动手机以抽奖';
        document.querySelector(".myCoverSpan").style.marginTop = '50vw';
        document.querySelector(".myCoverSpanLine").style.display = 'none';
        document.getElementById("preloader5").style.display = 'none';
        document.getElementById("yaoyiyaoHand").style.display = 'block';
        var myHand = document.getElementById("yaoyiyaoHand");
        var waitYao = setInterval(function () {
            if(myHand.className) {
                document.getElementById("yaoyiyaoHand").setAttribute('class', '');
            }else{
                document.getElementById("yaoyiyaoHand").setAttribute('class', 'animated tada');
            }
        },1000);
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
                    clearInterval(waitYao);
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

    }
});

function StartMyPage() {
    setTimeout(function () {
        document.querySelector(".myCover").style.display = 'none';
        document.querySelector(".my88red1").setAttribute('class', 'myAbsolute my88red1 animated slideInDown');
        setTimeout(function () {
            document.querySelector(".my66red1").setAttribute('class', 'myAbsolute my66red1 animated bounceInDown');
            setTimeout(function () {
                document.querySelector(".myCircle1").setAttribute('class', 'myAbsolute myCircle1 animated bounceIn');
                document.querySelector(".my88red2").setAttribute('class', 'myAbsolute my88red2 animated slideInDown');
                setTimeout(function () {
                    document.querySelector(".yuanbao1").setAttribute('class', 'myAbsolute yuanbao1 animated bounceIn');
                    document.querySelector(".my10red1").setAttribute('class', 'myAbsolute my10red1 animated slideInDown');
                    document.querySelector(".myCircle3").setAttribute('class', 'myAbsolute myCircle3 animated bounceIn');
                    setTimeout(function () {
                        document.querySelector(".myCircle2").setAttribute('class', 'myAbsolute myCircle2 animated bounceIn');
                        document.querySelector(".my66red2").setAttribute('class', 'myAbsolute my66red2 animated zoomInDown');
                        document.querySelector(".myCircle4").setAttribute('class', 'myAbsolute myCircle4 animated bounceInUp');
                        setTimeout(function () {
                            document.querySelector(".jiangliBg").setAttribute('class', 'myAbsolute jiangliBg animated bounceInUp');
                        }, 150);
                    }, 300);
                }, 400);
            }, 300);
        }, 200);
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