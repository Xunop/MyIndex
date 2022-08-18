console.log("**** COMMODORE 64 HOSTKER ****");
console.log("64K RAM SYSTEM  38911 BASIC BYTES FREE");
console.log("READY.");
console.log("▉");
console.log("load''*'',8");
console.log("Calicomp UI Loaded success.");

console.log("这样的出场方式怎么样？");
console.log("would you like my new suit?");
cleanChrImg()

// 点唱机
// var SongList = {
//   0:"will_you_remember_me",
//   1:"a_gaze_that_invited_disaster",
//   2:"meet_the_staff",
//   3:"neo_avatar",
//   4:"strictly_business"
//   };
// var SongSelect = Math.round( Math.random() * 4 );
// var SongName = SongList[SongSelect];
// document.getElementById(SongName).play();

//换装系统
// var ClotheList = {
//   0:"normal",
//   1:"anna_whiteshirt"
// };
// var ClotheSelect = Math.round( Math.random() * 1 );
// var ClotheName = ClotheList[ClotheSelect];
// if (ClotheSelect !== 0) {
//   document.getElementById(ClotheName).style.display = "inline";
// };



// var linkToSrc = "http://zhangxiaocai.cn";

// ===============欢迎语================

//   var writer = new TypeWriter({
//     container: document.querySelector('#dialog_1'),
//     strs: [
//      '调试模式',
//     ],
//     delay: 50,
//     imgStatue1: 'anna_talk_normal',
//     imgStatue2: 'anna_talk_normal_done',
//    });

setTimeout(() => {
  CRASHED_REPORT();
}, 1000);
var SEED = 20;
function CRASHED_REPORT() {
  var RUNNING_STATUE = Math.round(Math.random() * SEED);
  var ERROR_REASON_DE = {
    0: "MENTAL_DEPRESSION oxc000000f",
    1: "SO_LUCKY_TODAY 0x0000001B",
    2: "NICE_TRY 0x00000041",
    3: "LOVE_NOT_FOUND 0x00000001",
  };
  console.log(RUNNING_STATUE);
  // console.log(ERROR_REASON_DE);
  if (RUNNING_STATUE == '4') {
    document.getElementById('CRASHED_STATUE').style.display = "inline";
    var ERROR_CODE = document.getElementById("CRASHED_REASON");
    var ERROR_REASON = Math.round(Math.random() * 3);
    ERROR_CODE.innerHTML = ERROR_REASON_DE[ERROR_REASON];
  }
}
var TIME_WAITFOR = 3;
function CHECK_REPORT() {
  if (TIME_WAITFOR == 0) {
    var RUNNING_STATUE = Math.round(Math.random() * 50);
  } else {
    TIME_WAITFOR -= 1;
    console.log(TIME_WAITFOR);
  }
}

startTimeTalk();
function startTimeTalk() {
  var today = new Date();

  var mm = today.getMonth();
  if (mm < 2) {
    document.getElementById('winter').style.display = "block";
  }

  var hh = today.getHours();
  //var hh = 20; //调试模式
  var writer = new TypeWriter({
    container: document.querySelector('#dialog_1'),
    strs: [
      '.......zzz',
    ],
    delay: 50,
    imgStatue1: 'qicao_stand',
    imgStatue2: 'qicao_stand',
    lockStatue: 1,
  });

  setTimeout(() => {
    cleanChrImg()
    if (hh < 6 || hh >= 23) {
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '……',
          '$yo！少年',
          '你啊，是不是睡不着觉？',
          '就让我来帮帮你吧。',
          '你觉得人会什么会熬夜呢？',
          '可以总结成一个原因，那就是他们对今天这一天没有感到满足。',
          '少年，不尽情解放自己的话是不可能让自己得到满足的吧？',
          '^试着熬夜吧，直到能让今天的自己满足为止。'
        ],
        delay: 50,
        imgStatue1: 'qicao_yo',
        imgStatue2: 'qicao_yo2',
        lockStatue: 1,
      });
    } else if (hh < 23) {
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '……',
          'yo，少年。',
          '还没到点呢，现在还不算熬夜吧。',
          '$好好休息，^准备打打游戏^补补番剧^还是摸摸鱼呢？',
        ],
        delay: 50,
        imgStatue1: 'qicao_yo',
        imgStatue2: 'qicao_cos',
        lockStatue: 1,
      });
    }
  }, 2000);

  setTimeout(() => {
    cleanChrImg()
    var writer = new TypeWriter({
      container: document.querySelector('#dialog_1'),
      strs: [
        '……',
        '虽然但是，七草 ナズナ是不是很可爱。^',
        '七草 ナズナ是彻夜之歌的主角，喜欢喝啤酒和讲黄色笑话^，但遇上恋爱相关的话题却很容易害羞$。'
      ],
      delay: 70,
      imgStatue1: 'qicao_cos',
      imgStatue2: 'qicao_red',
      lockStatue: undefined,
    });
  }, 15000);// 注意修改15000

}

// ===============时间显示模块================
var flickerI = ":"
var checkFlicker = 0;
startTime()
function startTime() {
  var today = new Date();//定义日期对象   
  var yyyy = today.getFullYear();//通过日期对象的getFullYear()方法返回年    
  var MM = today.getMonth() + 1;//通过日期对象的getMonth()方法返回年    
  var dd = today.getDate();//通过日期对象的getDate()方法返回年     
  var hh = today.getHours();//通过日期对象的getHours方法返回小时   
  var mm = today.getMinutes();//通过日期对象的getMinutes方法返回分钟   
  var ss = today.getSeconds();//通过日期对象的getSeconds方法返回秒   
  // 如果分钟或小时的值小于10，则在其值前加0，比如如果时间是下午3点20分9秒的话，则显示15：20：09   
  MM = checkTime(MM);
  dd = checkTime(dd);
  mm = checkTime(mm);
  ss = checkTime(ss);

  if (checkFlicker == 0) {
    checkFlicker = 1;
    flickerI = ":";
  } else {
    checkFlicker = 0;
    flickerI = " ";
  }
  document.getElementById('nowDateTimeSpan').innerHTML = "H△g" + "&nbsp&nbsp&nbsp&nbsp&nbsp" + hh + flickerI + mm;

  setTimeout('startTime()', 1000);//每一秒中重新加载startTime()方法 
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// ===============时间主题模块================
setTheme();
function setTheme(themeStatue) {
  var themeColor_border = "#2241fd";
  var themeColor_buttonText2 = "#ffb171";


  switch (themeStatue) {
    case 0:
      //默认蓝色
      themeColor_border = "#2241fd";
      themeColor_buttonText2 = "#ffb171";
      break;
    case 1:
      //白日
      themeColor_border = "#eacc00";
      themeColor_buttonText2 = "#00c8ec";
      break;
    case 2:
      //傍晚
      themeColor_border = "#df6e00";
      themeColor_buttonText2 = "#f39d49";
      break;
    // case 3:
    //     //夜间
    //     themeColor_border = "#2241fd";
    //     themeColor_buttonText2 = "#ffb171";
    //     break;
    case 3:
      //冬季圣诞
      themeColor_border = "#e93c79";
      themeColor_buttonText2 = "#fff82e";
      break;
    default:
      break;
  }
  // document.getElementsByClassName('nowDateTimeSpan').style

  document.getElementById('buttonMin').style.borderRight = "solid 3px " + themeColor_border;
  document.getElementById('buttonMin').style.borderBottom = "solid 3px " + themeColor_border;
  document.getElementById('buttonMin').style.color = themeColor_border;
  document.getElementById('calicompFrameOutside_ID').style.backgroundColor = themeColor_border;
  document.getElementById('calicompFrameInside_ID').style.borderColor = themeColor_border;
  var tempClass_calicompButtonFrameText2 = document.getElementsByClassName("calicompButtonFrameText2");
  // 有几个格子就写几
  for (i = 0; i < 6; i++) {
    tempClass_calicompButtonFrameText2[i].style.color = themeColor_buttonText2;
  }

}

// ===============时间背景模块================
refreshBG();
function refreshBG() {
  console.log("=====刷新时间！=====");
  //等待夜来前，你会有想念谁吗
  var today = new Date();
  var hh = today.getHours();

  //var hh = 19;//调试模式
  var BGarray = {
    6: "Evj5u9zWYAMzUTk.png",
    15: "0910_1517.jpg",
    17: "0817_122631.jpg",
    19: "0817_122816.jpg",
    22: "0817_122737.jpg",
  };
  var ThemeArray = {
    4: 3,
    8: 2,
    16: 1,
    19: 2,
    24: 3,
  };
  var BGname = "./vh_resource/bg/Evj5u9zWYAMzUTk.png";

  for (var timeDecide in BGarray) {
    if (hh < timeDecide) {
      BGname = "./vh_resource/bg/" + BGarray[timeDecide];
      console.log("当前时间：" + hh);
      console.log("决定的时间区域：" + timeDecide);
      console.log("背景更替为：" + BGname);
      break;
    }
  }
  for (var timeDecide in ThemeArray) {
    if (hh < timeDecide) {
      ThemeNum = ThemeArray[timeDecide];
      setTheme(ThemeNum);
      console.log("主题决定的时间区域：" + timeDecide);
      console.log("主题更替为：" + ThemeNum);
      break;
    }
  }
  // document.write('<style>body{background:url(' + BGname + ');background-repeat:repeat-x;background-attachment:fixed;background-position:center;background-size: cover;background-color: #000;}</style>');
  var tempIn = "url(" + BGname + ")";
  // var tempIn = BGname;
  document.getElementById('backgroundDiv').style.backgroundImage = tempIn;
  console.log(tempIn);
  console.log("ready.");
  setTimeout('refreshBG()', 60000);
}

// ===============窗口最小化按钮事件================
var caliWinOpenStatue = 1;
function caliWinClose() {
  if (caliWinOpenStatue == 1) {
    caliWinOpenStatue = 0;
    document.getElementById('calicompFrameInside_ID').style.display = "none";
    var caliWinOpenStatue_buttonStatue = document.getElementById("buttonMin");
    caliWinOpenStatue_buttonStatue.innerHTML = "+";
    // document.getElementById("sys_sound_2").play();
    //   document.getElementById('calicompFrameInside_ID').style.animation = "calicompFrameScaleMin 0.5s ease-in none";
  } else {
    caliWinOpenStatue = 1;
    document.getElementById('calicompFrameInside_ID').style.display = "inline";
    var caliWinOpenStatue_buttonStatue = document.getElementById("buttonMin");
    caliWinOpenStatue_buttonStatue.innerHTML = "-";
    // document.getElementById("sys_sound_3").play();
  }

}

// ===============初始化角色================
function cleanChrImg() {
  console.log("初始化角色")
  document.getElementById('qicao_yo').style.display = "none";
  document.getElementById('qicao_yo2').style.display = "none";
  document.getElementById('qicao_red').style.display = "none";
  document.getElementById('qicao_red2').style.display = "none";
  document.getElementById('qicao_cos').style.display = "none";
  document.getElementById('qicao_cos2').style.display = "none";
  document.getElementById('qicao_stand').style.display = "none";
  document.getElementById('qicao_stand2').style.display = "none";

  document.getElementById('textPointer').style.display = "none";
  document.getElementById('calicompFrame_disable').style.display = "inline";
  document.getElementById('calicompFrame_disable2').style.display = "inline";
}

// ===============关于页面 返回按钮================
function aboutBack() {
  // document.getElementById("sys_sound_3").play();
  document.getElementById('calicompFrame_aboutBox').style.display = "none";
}

// ===============打开链接================
function jumptoLink() {
  // document.getElementById("sys_sound_1").play();
  window.open(linkToSrc);
}

// ===============窗体按钮 对话模块================
function caliButton(TakiIn) {
  // document.getElementById("sys_sound_1").play();
  switch (TakiIn) {
    case 'blog':
      cleanChrImg();
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '……',
          '$呀呼！',
          '要来我的博客看看吗？',
        ],
        delay: 50,
        imgStatue1: 'qicao_yo',
        imgStatue2: 'qicao_yo2',
        linkToName: "前往 xun's blog",
        lockStatue: 1,
      });
      linkToSrc = "https://blog.asuka-xun.cc/";

      setTimeout(() => {
        cleanChrImg();
        var writer = new TypeWriter({
          container: document.querySelector('#dialog_1'),
          strs: [
            '……',
            '呐呐呐,不去就不去。',
          ],
          delay: 50,
          imgStatue1: 'qicao_cos',
          imgStatue2: 'qicao_cos2',
          linkToName: "前往 xun's blog",
          lockStatue: undefined,
        });
      }, 5500);
      break;
    case 'bilibili':
      cleanChrImg();
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '……',
          '随便看看',
        ],
        delay: 50,
        imgStatue1: 'qicao_yo',
        imgStatue2: 'qicao_yo2',
        linkToName: "前去围观",
        lockStatue: 1,
      });
      linkToSrc = "https://space.bilibili.com/104833233";

      setTimeout(() => {
        cleanChrImg()
        var writer = new TypeWriter({
          container: document.querySelector('#dialog_1'),
          strs: [
            '……',
            '没啥好看的',
          ],
          delay: 50,
          imgStatue1: 'qicao_stand',
          imgStatue2: 'qicao_stand2',
          linkToName: "前去围观",
          lockStatue: undefined,
        });
      }, 3200);

      break;
    case 'gitHub':
      cleanChrImg();
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '……',
          '$会存放一些Demo',
          '为什么会是Demo？因为技术力不够哈哈哈...',
        ],
        delay: 50,
        imgStatue1: 'qicao_cos',
        imgStatue2: 'qicao_cos2',
        linkToName: "前去围观",
      });
      linkToSrc = "https://github.com/Xunop/";
      break;
    case 'leetcode':
      cleanChrImg();
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '……',
          '大佬要浇浇我嘛',
        ],
        delay: 50,
        imgStatue1: 'qicao_red',
        imgStatue2: 'qicao_red2',
        linkToName: "看看最近有没有摸鱼",
      });
      linkToSrc = "https://leetcode.cn/u/nostalgic-i3abbagexzp/";
      break;
    case 'timeBack':
      cleanChrImg();
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '……',
          '回去吧...'
        ],
        delay: 50,
        imgStatue1: 'qicao_stand',
        imgStatue2: 'qicao_stand2',
        linkToName: "穿梭",
      });
      linkToSrc = "/one.html";
      break;
    case 'music':
      cleanChrImg();
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '……',
          '歌还是经常听的',
        ],
        delay: 50,
        imgStatue1: 'qicao_cos',
        imgStatue2: 'qicao_cos',
        linkToName: "去看看",
      });
      linkToSrc = "https://music.163.com/#/user/home?id=480009568";
      break;
    case 'steam':
      cleanChrImg();
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '啾',
          '并没有想到什么特别好玩的游戏呢...^^那里几乎成为过去的纪念页了。$$$',
          '但可以买一份Va11halla，^那个酒吧和世界并不会让人特别讨厌噢。'
        ],
        delay: 50,
        imgStatue1: 'qicao_cos',
        imgStatue2: 'qicao_cos',
        linkToName: "看看 SteamCommunity id/antonoko",
      });
      linkToSrc = "http://steamcommunity.com/id/antonoko/";
      break;
    case 'switch':
      cleanChrImg();
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '啊！',
          '米津玄师说他任天堂全明星大乱斗特比擅长卡比呢！$$$',
          '大乱斗真的是个特别难的游戏...^怎么也玩不好。^^但又非常喜欢。$$$',
        ],
        delay: 50,
        imgStatue1: 'qicao_cos',
        imgStatue2: 'qicao_cos',
        linkToName: "开机 Nintendo Switch",
        lockStatue: 1,
      });
      linkToSrc = "https://tonoko.moe/index_nintendoswitch/";

      setTimeout(() => {
        cleanChrImg()
        var writer = new TypeWriter({
          container: document.querySelector('#dialog_1'),
          strs: [
            '不过...^',
            '互相添加好友什么的，$',
            '在国行网络架设完毕之前，^最大的作用还是确认互相的状态吧。'
          ],
          delay: 50,
          imgStatue1: 'qicao_cos',
          imgStatue2: 'qicao_cos',
          linkToName: "开机 Nintendo Switch",
          lockStatue: undefined,
        });
      }, 8000);

      break;
    case 'about':
      // document.getElementById("sys_sound_2").play();
      cleanChrImg();
      document.getElementById('calicompFrame_aboutBox').style.display = "inline";
      document.getElementById('calicompFrame_disable').style.display = "none";
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: [
          '……',
          '嗨~'
        ],
        delay: 50,
        imgStatue1: 'qicao_cos',
        imgStatue2: 'qicao_cos',
        linkToName: undefined,
      });
      break;
    default:
      var writer = new TypeWriter({
        container: document.querySelector('#dialog_1'),
        strs: ['什么也没有发生。'],
        delay: 50,
        imgStatue1: 'qicao_cos',
        imgStatue2: 'qicao_cos',
      });
  }
}


function getOs() {
  var OsObject = "";
  if (navigator.userAgent.indexOf("MSIE") > 0) {
    return "MSIE";
  }
  if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
    return "Firefox";
  }
  if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
    return "Safari";
  }
  if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
    return "Camino";
  }
  if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
    return "Gecko";
  }

}
console.log("您的浏览器bai类型为:" + getOs());

if (getOs() === 'Firefox') {
  document.getElementById('byType_').style.marginTop = "-10px";
}
