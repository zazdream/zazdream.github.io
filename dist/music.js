const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    audio: [
      {
        name: "逆追风少年",
        artist: '吴奇隆',
        url: '../music/index/吴奇隆-追风少年.mp3',
        cover: '../music/index/zhuifengshaonian.jpg',
      },
      {
        name: '起风了',
        artist: '买辣椒也用券',
        url: '../music/index/买辣椒也用券-起风了.mp3',
        cover: '../music/index/qifengle.jpg',
      },
      {
        name: '白兰鸽巡游记',
        artist: '丢火车乐队',
        url: '../music/index/丢火车乐队-白兰鸽巡游记.mp3',
        cover: '../music/index/bailangexunyouji.jpg',
      }
    ]
});