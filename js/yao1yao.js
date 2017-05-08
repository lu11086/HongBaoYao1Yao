/**
 * Created by Palov on 2017/5/4.
 */
var animateStart = animateStop = fangfaStep1 = fangfaStep2 = fangfaStep3 = null;
/*var myWidth = document.getElementsByTagName("body")[0].clientWidth;
 document.getElementsByTagName("body")[0].style.height = 2.2 * myWidth + 'px';*/
/*可替换部分设置*/
/*document.querySelector(".mySpan").style.fontSize = 0.03 * myWidth + 'px';*/

//运动事件监听
if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
}
var vibrateSupport = "vibrate" in navigator;
if (vibrateSupport) { //兼容不同的浏览器
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
}

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
        navigator.vibrate(500);
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        if (speed > SHAKE_THRESHOLD) {
            document.querySelector(".myCover").setAttribute('class', 'myCover animated fadeOut');
            StartMyPage();
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}

setTimeout(function () {
    document.querySelector(".myCover").setAttribute('class', 'myCover animated fadeOut');
    StartMyPage();
},5000);

function StartMyPage() {
    setTimeout(function () {
        document.querySelector(".myCover").style.display = 'none';
        document.querySelector(".myBGImg2").style.display = 'block';
        document.querySelector(".my88red1").setAttribute('class', 'myAbsolute my88red1 animated slideInDown');
        setTimeout(function () {
            document.querySelector(".myBGImg1").style.display = 'block';
            document.querySelector(".my66red1").setAttribute('class', 'myAbsolute my66red1 animated bounceInDown');
            setTimeout(function () {
                document.querySelector(".myCircle1").setAttribute('class', 'myAbsolute myCircle1 animated bounceIn');
                document.querySelector(".my88red2").setAttribute('class', 'myAbsolute my88red2 animated rollIn');
                setTimeout(function () {
                    document.querySelector(".yuanbao1").setAttribute('class', 'myAbsolute yuanbao1 animated flipInX');
                    document.querySelector(".my10red1").setAttribute('class', 'myAbsolute my10red1 animated rotateInUpRight');
                    setTimeout(function () {
                        document.querySelector(".myCircle3").setAttribute('class', 'myAbsolute myCircle3 animated flipInY');
                        setTimeout(function () {
                            document.querySelector(".myCircle2").setAttribute('class', 'myAbsolute myCircle2 animated bounceIn');
                            document.querySelector(".my66red2").setAttribute('class', 'myBGImg3 my66red2 animated zoomInDown');
                            setTimeout(function () {
                                document.querySelector(".myCircle4").setAttribute('class', 'myBGImg3 myCircle4 animated bounceInUp');
                                setTimeout(function () {
                                    document.querySelector(".myBGImg2").setAttribute('class', 'myBGImg myBGImg2 animated backgroundUp');
                                    setTimeout(function () {
                                        document.querySelector(".myBGImg1").setAttribute('class', 'myBGImg myBGImg1 animated backgroundUp');
                                        document.querySelector(".jiangliBg").setAttribute('class', 'myAbsolute jiangliBg animated bounceInUp ');
                                    }, 200);
                                }, 500);
                            }, 200);
                        }, 300);
                    }, 200);
                }, 400);
            }, 300);
        }, 200);
    }, 200);
}

function usualAnimate() {
    if (animateStop) {
        clearTimeout(animateStop)
    }
    ;
    animateStart = setTimeout(function () {
        document.querySelector(".yaoyiyao").setAttribute('class', 'myAbsolute yaoyiyao');
        document.querySelector(".headerInf").setAttribute('class', 'myAbsolute headerInf');
        document.querySelector(".erweimText").setAttribute('class', 'myAbsolute erweimText');
        document.querySelector(".middleText").setAttribute('class', 'myAbsolute middleText');
        stopUalAnimate();
    }, 1000);
}

function stopUalAnimate() {
    if (animateStart) {
        clearTimeout(animateStart)
    }
    ;
    animateStop = setTimeout(function () {
        document.querySelector(".yaoyiyao").setAttribute('class', 'myAbsolute yaoyiyao animated tada');
        document.querySelector(".headerInf").setAttribute('class', 'myAbsolute headerInf animated pulse');
        document.querySelector(".erweimText").setAttribute('class', 'myAbsolute erweimText animated pulse');
        document.querySelector(".middleText").setAttribute('class', 'myAbsolute middleText animated flash');
        usualAnimate();
    }, 2000);
}

function FFStep01() {
    document.querySelector(".fangfa01").setAttribute('class', 'myAbsolute fangfa01');
    setTimeout(function () {
        document.querySelector(".fangfa01").setAttribute('class', 'myAbsolute fangfa01 animated pulsePlus');
        FFStep02();
    }, 1000)
}

function FFStep02() {
    document.querySelector(".fangfa02").setAttribute('class', 'myAbsolute fangfa02');
    setTimeout(function () {
        document.querySelector(".fangfa02").setAttribute('class', 'myAbsolute fangfa02 animated pulsePlus');
        FFStep03();
    }, 1000)
}

function FFStep03() {
    document.querySelector(".fangfa03").setAttribute('class', 'myAbsolute fangfa03');
    setTimeout(function () {
        document.querySelector(".fangfa03").setAttribute('class', 'myAbsolute fangfa03 animated pulsePlus');
        FFStep01();
    }, 1000)
}