const btn = document.getElementById("btn");
const text = document.getElementById("text");

//2秒後にテキストの内容を変更する
btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
