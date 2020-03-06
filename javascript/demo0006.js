console.log('执行0006.is');
// 获取当前的时间
// var 变量名=变量值；new Date()就是获取当前的日期时间
var now = new Date();
console.log(now);
// 获取时间的某一个部分
var huor = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
console.log('小时:', huor);
console.log('分钟:', minute);
console.log('秒:', second);

// 年月日
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log('year, month, day');

document.getElementById('spTime').innerHTML =
  huor + ':' + minute + ':' + second;

// 反复间隔时间执行代码
// 第一个参数是要执行的代码，第二个参数是间隔的毫秒值，1000就是一毫秒
setInterval(function() {
  // console.log(new Date());
  now = new Date();
  huor = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  document.getElementById('spTime').innerHTML =
    huor + ':' + minute + ':' + second;
}, 1000);
