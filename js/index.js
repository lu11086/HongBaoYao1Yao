/**
 * Created by Palov on 2017/5/4.
 */
var animateStart = animateStop = fangfaStep1 = fangfaStep2 = fangfaStep3 = null;
var myWidth = document.getElementsByTagName("body")[0].clientWidth;
document.getElementsByTagName("body")[0].style.height = 2.2 * myWidth + 'px';
/*背景设置*/
document.querySelector(".my88red1").style.top = 0.05 * myWidth + 'px';
document.querySelector(".my88red1").style.left = 0.27 * myWidth + 'px';
document.querySelector(".myCircle1").style.top = 0.1 * myWidth + 'px';
document.querySelector(".myCircle1").style.left = 0.5 * myWidth + 'px';
document.querySelector(".my66red1").style.top = 0.06 * myWidth + 'px';
document.querySelector(".my66red1").style.left = 0.73 * myWidth + 'px';
document.querySelector(".yuanbao1").style.top = 0.15 * myWidth + 'px';
document.querySelector(".yuanbao1").style.left = 0.82 * myWidth + 'px';
document.querySelector(".myCircle2").style.top = 0.25 * myWidth + 'px';
document.querySelector(".myCircle2").style.left = 0.265 * myWidth + 'px';
document.querySelector(".myCircle3").style.top = 0.55 * myWidth + 'px';
document.querySelector(".myCircle3").style.left = 0.88 * myWidth + 'px';
document.querySelector(".my88red2").style.top = 0.9 * myWidth + 'px';
document.querySelector(".my88red2").style.left = 0.1 * myWidth + 'px';
document.querySelector(".my10red1").style.top = 0.98 * myWidth + 'px';
document.querySelector(".my10red1").style.left = 0.83 * myWidth + 'px';
document.querySelector(".my66red2").style.top = 1.35 * myWidth + 'px';
document.querySelector(".my66red2").style.left = 0.1 * myWidth + 'px';
document.querySelector(".myCircle4").style.top = 1.25 * myWidth + 'px';
document.querySelector(".myCircle4").style.left = 0.83 * myWidth + 'px';
/*header设置*/
document.querySelector(".yaoyiyao").style.top = 0.18 * myWidth + 'px';
document.querySelector(".yaoyiyao").style.left = 0.075 * myWidth + 'px';
document.querySelector(".qiangHongBao").style.top = 0.21 * myWidth + 'px';
document.querySelector(".qiangHongBao").style.left = 0.265 * myWidth + 'px';
document.querySelector(".headerInf").style.top = 0.438 * myWidth + 'px';
document.querySelector(".headerInf").style.left = 0.33 * myWidth + 'px';
document.querySelector(".middleBg").style.top = 0.6 * myWidth + 'px';
document.querySelector(".erweimBg").style.top = 0.9 * myWidth + 'px';
document.querySelector(".erweimTitle").style.top = 0.98 * myWidth + 'px';
document.querySelector(".canyufangfa").style.top = 1.5 * myWidth + 'px';
document.querySelector(".fangfaLian").style.top = 1.65 * myWidth + 'px';
document.querySelector(".fangfa01").style.top = document.querySelector(".fangfa02").style.top = document.querySelector(".fangfa03").style.top = 1.58 * myWidth + 'px';
document.querySelector(".fangfa01text").style.top = document.querySelector(".fangfa02text").style.top = document.querySelector(".fangfa03text").style.top = 1.78 * myWidth + 'px';
document.querySelector(".fangfa01").style.left = document.querySelector(".fangfa01text").style.left = 0.1 * myWidth + 'px';
document.querySelector(".fangfa02").style.left = 0.41 * myWidth + 'px';
document.querySelector(".fangfa02text").style.left = 0.43 * myWidth + 'px';
document.querySelector(".fangfa03").style.left = document.querySelector(".fangfa03text").style.left = 0.72 * myWidth + 'px';
/*可替换部分设置*/
document.querySelector(".middleTitle").style.top = 0.64 * myWidth + 'px';
document.querySelector(".middleText").style.top = 0.765 * myWidth + 'px';
document.querySelector(".erweimText").style.top = 1.045 * myWidth + 'px';
document.querySelector(".mySpan").style.top = 1.95 * myWidth + 'px';
document.querySelector(".mySpan").style.left = 0.3 * myWidth + 'px';
document.querySelector(".mySpan").style.fontSize = 0.03 * myWidth + 'px';

window.onload = function () {
    /*点击二维码进行跳转——跟扫一扫后一样的网址*/
    document.querySelector(".erweimText").onclick = function () {
        window.open("https://lu11086.github.io/HongBaoYao1Yao/yao1yao.html")
    };
    /*开场动画*/
    setTimeout(function () {
        document.querySelector(".my88red1").style.display = 'block';
        document.querySelector(".my88red1").setAttribute('class', 'myAbsolute my88red1 animated slideInDown');
        setTimeout(function () {
            document.querySelector(".my66red1").style.display = 'block';
            document.querySelector(".my66red1").setAttribute('class', 'myAbsolute my66red1 animated bounceInDown');
            setTimeout(function () {
                document.querySelector(".myCircle1").style.display = 'block';
                document.querySelector(".myCircle1").setAttribute('class', 'myAbsolute myCircle1 animated bounceIn');
                document.querySelector(".my88red2").style.display = 'block';
                document.querySelector(".my88red2").setAttribute('class', 'myAbsolute my88red2 animated rollIn');
                setTimeout(function () {
                    document.querySelector(".yuanbao1").style.display = 'block';
                    document.querySelector(".yuanbao1").setAttribute('class', 'myAbsolute yuanbao1 animated flipInX');
                    document.querySelector(".my10red1").style.display = 'block';
                    document.querySelector(".my10red1").setAttribute('class', 'myAbsolute my10red1 animated rotateInUpRight');
                    setTimeout(function () {
                        document.querySelector(".myCircle3").style.display = 'block';
                        document.querySelector(".myCircle3").setAttribute('class', 'myAbsolute myCircle1 animated flipInY');
                        document.querySelector(".yaoyiyao").style.display = 'block';
                        document.querySelector(".yaoyiyao").setAttribute('class', 'myAbsolute yaoyiyao animated rotateIn');
                        document.querySelector(".qiangHongBao").style.display = 'block';
                        document.querySelector(".qiangHongBao").setAttribute('class', 'myAbsolute qiangHongBao animated zoomIn');
                        setTimeout(function () {
                            document.querySelector(".myCircle2").style.display = 'block';
                            document.querySelector(".myCircle2").setAttribute('class', 'myAbsolute myCircle2 animated bounceIn');
                            document.querySelector(".headerInf").style.display = 'block';
                            document.querySelector(".headerInf").setAttribute('class', 'myAbsolute headerInf animated flipInX');
                            document.querySelector(".middleBg").style.display = 'block';
                            document.querySelector(".middleBg").setAttribute('class', 'myAbsolute middleBg animated bounceIn');
                            document.querySelector(".my66red2").style.display = 'block';
                            document.querySelector(".my66red2").setAttribute('class', 'myAbsolute my66red2 animated zoomInDown');
                            setTimeout(function () {
                                document.querySelector(".myCircle4").style.display = 'block';
                                document.querySelector(".myCircle4").setAttribute('class', 'myAbsolute myCircle4 animated bounceInUp');
                                document.querySelector(".erweimBg").style.display = 'block';
                                document.querySelector(".erweimBg").setAttribute('class', 'myAbsolute erweimBg animated fadeIn');
                                setTimeout(function () {
                                    document.querySelector(".middleTitle").style.display = 'block';
                                    document.querySelector(".middleTitle").setAttribute('class', 'myAbsolute middleTitle animated flipInY');
                                    document.querySelector(".middleText").style.display = 'block';
                                    document.querySelector(".middleText").setAttribute('class', 'myAbsolute middleText animated flipInY');
                                    setTimeout(function () {
                                        document.querySelector(".erweimTitle").style.display = 'block';
                                        document.querySelector(".erweimTitle").setAttribute('class', 'myAbsolute erweimTitle animated fadeIn');
                                        document.querySelector(".erweimText").style.display = 'block';
                                        document.querySelector(".erweimText").setAttribute('class', 'myAbsolute erweimText animated rotateIn');
                                        setTimeout(function () {
                                            document.querySelector(".canyufangfa").style.display = 'block';
                                            document.querySelector(".canyufangfa").setAttribute('class', 'myAbsolute canyufangfa animated fadeIn');
                                            document.querySelector(".fangfaLian").style.display = 'block';
                                            document.querySelector(".fangfaLian").setAttribute('class', 'myAbsolute fangfaLian animated fadeIn');
                                            document.querySelector(".fangfa01").style.display = 'block';
                                            document.querySelector(".fangfa01").setAttribute('class', 'myAbsolute fangfa01 animated zoomIn');
                                            document.querySelector(".fangfa02").style.display = 'block';
                                            document.querySelector(".fangfa02").setAttribute('class', 'myAbsolute fangfa02 animated zoomIn');
                                            document.querySelector(".fangfa03").style.display = 'block';
                                            document.querySelector(".fangfa03").setAttribute('class', 'myAbsolute fangfa03 animated zoomIn');
                                            setTimeout(function () {
                                                document.querySelector(".fangfa01text").style.display = 'block';
                                                document.querySelector(".fangfa01text").setAttribute('class', 'myAbsolute fangfa01text animated zoomIn');
                                                document.querySelector(".fangfa02text").style.display = 'block';
                                                document.querySelector(".fangfa02text").setAttribute('class', 'myAbsolute fangfa02text animated zoomIn');
                                                document.querySelector(".fangfa03text").style.display = 'block';
                                                document.querySelector(".fangfa03text").setAttribute('class', 'myAbsolute fangfa03text animated zoomIn');
                                                setTimeout(function () {
                                                    document.querySelector(".mySpan").style.display = 'block';
                                                    document.querySelector(".mySpan").setAttribute('class', 'myAbsolute mySpan animated zoomIn');
                                                    usualAnimate();
                                                    FFStep01();
                                                }, 500);
                                            }, 1000);
                                        }, 200);
                                    }, 300);
                                }, 300);
                            }, 200);
                        }, 300);
                    }, 200);
                }, 400);
            }, 300);
        }, 200);
    }, 200);
};

function usualAnimate() {
    if (animateStop) {clearTimeout(animateStop)};
    animateStart = setTimeout(function () {
        document.querySelector(".yaoyiyao").setAttribute('class', 'myAbsolute yaoyiyao');
        document.querySelector(".headerInf").setAttribute('class', 'myAbsolute headerInf');
        document.querySelector(".erweimText").setAttribute('class', 'myAbsolute erweimText');
        document.querySelector(".middleText").setAttribute('class', 'myAbsolute middleText');
        stopUalAnimate();
    }, 1000);
}

function stopUalAnimate() {
    if (animateStart) {clearTimeout(animateStart)};
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
    },1000)
}

function FFStep02() {
    document.querySelector(".fangfa02").setAttribute('class', 'myAbsolute fangfa02');
    setTimeout(function () {
        document.querySelector(".fangfa02").setAttribute('class', 'myAbsolute fangfa02 animated pulsePlus');
        FFStep03();
    },1000)
}

function FFStep03() {
    document.querySelector(".fangfa03").setAttribute('class', 'myAbsolute fangfa03');
    setTimeout(function () {
        document.querySelector(".fangfa03").setAttribute('class', 'myAbsolute fangfa03 animated pulsePlus');
        FFStep01();
    },1000)
}