// 今日の日付を取得
const today = new Date();

//年月日の取得
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();

//今日の日付をコンソールに表示
console.log(year + "年" + month + "月" + date + "日");
