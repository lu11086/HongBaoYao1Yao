/**
 * Created by Palov on 2017/5/4.
 */
var animateStart = animateStop = fangfaStep1 = fangfaStep2 = fangfaStep3 = null;
/*var myWidth = document.getElementsByTagName("body")[0].clientWidth;
 document.getElementsByTagName("body")[0].style.height = 2.2 * myWidth + 'px';*/
/*可替换部分设置*/
/*document.querySelector(".mySpan").style.fontSize = 0.03 * myWidth + 'px';*/

imgLoader(['img/background.png', 'img/erweimBg.png', 'img/1494168012.png', 'img/1.扫码关注e享家 微信公众号.png', 'img/2.主界面点击   红包菜单.png', 'img/3.进入界面后摇一摇   手机抢现金红包.png', 'img/9.12-9.14日每天上午10点.png', 'img/10红包.png', 'img/66红包.png', 'img/88红包.png', 'img/100,000元.png', 'img/middleBg.png', 'img/参与方法.png', 'img/方法·链接.png', 'img/方法01.png', 'img/方法02.png', 'img/方法03.png', 'img/红包.png', 'img/扫码开抢.png', 'img/现金红包 限量不限额.png', 'img/摇一摇.png', 'img/元宝.png', 'img/圆钱.png'], function (percentage) {
    var percentT = percentage * 100;
    document.querySelector(".myCoverSpan").innerText = 'Loading ' + (parseInt(percentT)) + '%';
    document.querySelector(".myCoverSpanLine").style.width = percentT + '%';
    if (percentage == 1) {
        document.getElementById("preloader5").style.display = 'none';
        /*开场动画*/
        setTimeout(StartMyPage, 500);
    }
});

window.onload = function () {
    /*点击二维码进行跳转——跟扫一扫后一样的网址*/
    document.querySelector(".erweimText").onclick = function () {
        window.open("https://lu11086.github.io/HongBaoYao1Yao/yao1yao.html")
    };
};

function StartMyPage() {
    setTimeout(function () {
        document.querySelector(".myCover").style.display = 'none';
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
                        document.querySelector(".myCircle3").setAttribute('class', 'myAbsolute myCircle3 animated flipInY');
                        document.querySelector(".yaoyiyao").style.display = 'block';
                        document.querySelector(".yaoyiyao").setAttribute('class', 'myAbsolute yaoyiyao animated bounceIn');
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