// https://twitter.com/*%E5%AF%BF%E5%8F%B8%E6%89%93

// class SushidaResult {
//   constructor(score, speed, typo, course) {
//     this.score = score;
//     this.speed = speed;
//     this.typo = typo;
//     this.course = course;
//   }
// }

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  console.log("hoge");
});

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   console.log(tabId);
//   console.log(changeInfo.status);
//   if (tab.url.indexOf("https://twitter.com/") > -1) {
//     let url = decodeURIComponent(tab.url);
//     console.log(url);
//   }
//   // ページのURLを取得
//   // // URLからリザルト結果を抽出
//   // const score = url.match(/★(\d,\d+)/)[1];
//   // const speed = url.match(/速度：(\d+.\d+)/)[1];
//   // const typo = url.match(/ミス：(\d+)/)[1];
//   // const course = url.match(/(\d,\d+)円コース/)[1];
//   // console.log(score, speed, typo, course);
// });
