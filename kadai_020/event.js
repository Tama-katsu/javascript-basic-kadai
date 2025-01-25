//ボタンの取得
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //書き換えたい要素を取得する
  const text = document.getElementById("text");
  //要素を書き換える
  text.textContent = "ボタンをクリックしました";
});
