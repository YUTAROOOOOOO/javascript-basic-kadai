// id名btnのHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');
// id名textのHTML要素を取得し、定数に代入
const text = document.getElementById('text');
// 要素をクリックしたときのイベント
btn.addEventListener('click', () => {
  // 2秒後に定数textの文字列をボタンをクリックしましたに変更
  setTimeout (() => {
    text.textContent = 'ボタンをクリックしました';
  },2000);
});
