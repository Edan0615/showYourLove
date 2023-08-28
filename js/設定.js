/*
這裡是控制設定的地方 請根據//這個後面的提示做更改呦
*/

/*~~~~~我是分割線~~~~~~*/

//(Debug除錯專用)如果要測驗一下這裡的code有沒有裝好 可以把下面這行的//刪掉 如果安裝成功就會跳出"" 裡面的字樣 測驗完記得在前面再次打上//
//alert("設定js已安裝完畢");

/*~~~~~我是分割線~~~~~*/
const backgroundColor = "white";

$(document).ready(function() {
    $('body').css('background-color', backgroundColor);
});



/*~~~~~我是分割線~~~~~*/

const desiredTitle = "送給我最愛的人"; //請在引號中間放入這個你想要放的title 比如給我最愛的XXX
$("title").html(desiredTitle); //這個別碰呦 這是實際上去更改title的程式

/*~~~~我是分割線~~~~~*/
    const imgType = ".jpg";//這裡可以控管 你的圖片的副檔名 初始設定是.jpg 如果你放入的是png檔案 請把它改成.png

/*~~~~我是分割線~~~~~*/

const how_many_picture_are_there = 3;
let yourDesireData = [//這裡填寫data
    [
        "還記得嗎?",//卡片的頭 上面小字的那一個
        "2023年的3月24號",//卡片的標題
        '這是我們第一次去看煙火的日子',//卡片的第一段話
        "那時候我才發現原來夏夜最燦爛的煙火",//卡片的第二段話
        '一直藏在妳的眼中',//卡片的第三段話
        'sylvester-3882231_1280'//照片的"名字"
    ],
    [
        "還記得嗎?",//卡片的頭 上面小字的那一個
        "2023年的6月22號",//卡片的標題
        '這是我們第一次去看夕陽的日子',//卡片的第一段話
        "那時候我才發現連夕陽都",//卡片的第二段話
        '無法與妳的美相提並論。',//卡片的第三段話
        'people-2561053_1280'//照片的"名字"
    ],
    [
        "還記得嗎?",//卡片的頭 上面小字的那一個
        "2023年的7月28號",//卡片的標題
        '我們一起看了海',//卡片的第一段話
        "那時候我才發現原來我",//卡片的第二段話
        '想要餘生都陪妳看海。',//卡片的第三段話
        'digital-art-398342_1280'//照片的"名字"
    ],
];

//這裡是自動顯示卡片控制區 不用理他 除非你想客製化
let i;
function changeHtml(cardHeader, cardTitle, cardText1, cardText2, cardText3, picName) {
    let html = `
        <li class="slide-visible">
            <div class="card rounded-0 h-100 shadow">
                <div class="row g-0 h-100">
                    <div class="col-md-6 col-xl-5 d-flex align-items-center p-2 p-md-3 p-xl-5">
                        <div class="card-body p-1 p-md-3 p-xl-5">
                            <p class="lead _cardHeader">${cardHeader}</p>
                            <h2 class="card-title _cardTitle" style="color:#DF1E1E;">${cardTitle}</h2>
                            <p class="card-text mt-3 _cardText1">${cardText1}</p>
                            <p class="_cardText2">${cardText2}</p>
                            <p class="card-text _cardText3"><small class="text-muted">${cardText3}</small></p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-7">
                        <img src="./pic/${picName}${imgType}" class="card-img d-none d-md-block" loading="lazy" style="height: 100%; object-fit: cover;" alt="${picName}" title="${picName}">
                        <img src="./pic/${picName}${imgType}" class="card-img d-block d-md-none" loading="lazy" style="width: 100%; object-fit: cover;" alt="${picName}">
                    </div>
                </div>
            </div>
        </li>
    `;
    return html;
}
for (i = 1; i <= how_many_picture_are_there; i++) {
    let html = changeHtml(yourDesireData[i - 1][0],
        yourDesireData[i - 1][1],
        yourDesireData[i - 1][2],
        yourDesireData[i - 1][3],
        yourDesireData[i - 1][4],
        yourDesireData[i - 1][5]);
    $(".slider-container").append(html);
}

/*~~~~~我是分割線~~~~~*/
//這裡可以控制愛心雪的東西
    //如果想換其他的ICON可以到  https://icons.getbootstrap.com/     找自己喜歡的
    const loveSnowIcon = "bi bi-heart-fill";   //`<i class="bi bi-heart-fill"></i>`;
    var numberOfLoveIcons = 99;
    var loveIconSize = 20;
    var loveIconColor = 'red';
    var animationDurationRange = [4000, 8000];// 4000等於4秒 8000等於8秒 

/*~~~~~我是分割線~~~~~*/
 //這裡是控制音樂撥放的程式碼別理他~

 document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audio-player');

    audioPlayer.addEventListener('play', function() {
        console.log('Music started playing.');
        // You can add your own actions here when music starts playing.
    });

    audioPlayer.addEventListener('pause', function() {
        console.log('Music paused.');
        // You can add your own actions here when music is paused.
    });

    audioPlayer.addEventListener('ended', function() {
        console.log('Music playback ended.');
        // You can add your own actions here when music playback ends.
    });
});
