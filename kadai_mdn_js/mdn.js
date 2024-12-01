// 本日の日時を取得
const today = new Date();
// ◯年◯月◯日の文字列で出力
console.log(today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日');