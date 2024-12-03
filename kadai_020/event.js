// id名btnのHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');
// id名textのHTML要素を取得し、定数に代入
const text = document.getElementById('text');
// 要素がクリックされた時のイベント
btn.addEventListener('click', () => {
  // 定数textの文字列をボタンをクリックしましたに変更
  text.textContent = 'ボタンをクリックしました';
});