console.log('进入h000.js');
/* 展示逻辑表达试的计算结果
> < == != <= >=
点击开始盘不安的按钮 就比对两个文本框中的输入信息，结果放在div中
*/
// 第一步 获取相关元素================================================
var info01 = document.getElementById('info01'); //第一个输入框
var info02 = document.getElementById('info02'); //第二个输入框
var btn = document.getElementById('btn'); //判断按钮
var div = document.getElementById('div'); //显示结果的div
console.log(info01, info02, btn, div);

// 第二步，判断按钮点击动作=======================
btn.addEventListener('click', function() {
  console.log('开始做判断');
  // 获取输入框中输入的内容
  var val01 = info01.value; //第二个值
  var val02 = info02.value; //第二个值
  console.log('输入的值:', val01, val02, val01.length, val02.length);
  // 显示输入的值的信息
  div.innerHTML = '第一个值是:' + val01 + '<br>';
  div.innerHTML = div.innerHTML + '第二个值是:' + val02 + '<br>';

  // 要有输入才能继续判断
  // 去掉空白字符在判断输入的情况 /\*/g表示任意的空白字符
  val01 = val01.replace(/\*/g, '');
  val02 = val02.replace(/\*/g, '');
  console.log('去掉空格之后的值:', val01, val02, val01.length, val02.length);

  if (val01.length == 0) {
    // 没有第一个值输入就中断执行并显示错误
    div.innerHTML = div.innerHTML + '第一个信息没有输入有效信息<br>';
    // 页面元素.focus()表示元素获取点
    info01.focus();
    return;
  }
  if (val02.length == 0) {
    div.innerHTML = div.innerHTML + '第二个要输入<br>';
    info02.focus();
    return;
  }
  // 大于的判断 逻辑判断表达式只有两个结果，true,false
  // a=b表示让a的值为b a=100表示a变成100
  // a==b表示判断a是否和b相等 a==100表示如果a的值是100返回真，否则为假
  div.innerHTML = div.innerHTML + '大于的判断结果：' + (val01 > val02) + '<br>';
  div.innerHTML =
    div.innerHTML + '大于或者等于的判断结果：' + (val01 >= val02) + '<br>';
  // a+=b;就是a=a+b; !是not
  div.innerHTML += '不相等测试的判断结果：' + (val01 != val02) + '<br>';
  div.innerHTML +=
    '取反操作不相等测试的判断结果：' + !(val01 == val02) + '<br>';
    div.innerHTML =
    div.innerHTML + '大于或等于的判断结果：' + (val01 >= val02) + '<br>';
  // 小于或等于的判断
  div.innerHTML =
    div.innerHTML + '小于或等于的判断结果：' + (val01 <= val02) + '<br>';
  // 信息长度的判断
  div.innerHTML =
    div.innerHTML + '信息长度的判断结果：' + (val01.length > val02.length) + '<br>';
    
});
