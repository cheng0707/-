console.log('进入js');
// 获取页面元素
var txtNum = document.getElementById('txtNum'); //手机号输入
var btnNum = document.getElementById('btnNum'); //确认按钮
var spError = document.getElementById('spError'); //信息提示用的

// 确认按钮点击事件
btnNum.addEventListener('click', function() {
  console.log('确认按钮点击事件');
  var num = txtNum.value;
  console.log('输入手机号是：', +num + '!');
  // 去掉头尾空格的方法
  num = num.replace(/(^\s*)|(\s*$)/g, '');
  console.log('去掉头尾空格之后的手机号：' + num + '!');
  spError.innerHTML = '';
  // 判断有没有输入
  if (num == '') {
    spError.innerHTML = '请输入手机号';
    return;
  }
  if (isNaN(num)) {
    spError.innerHTML = '请输入数字';
    return;
  }
  // 判断整数
  var fnum = parseFloat(num);
  var inum = parseInt(num);
  if (inum != fnum) {
    spError.innerHTML = '请输入整数';
    return;
  }
  // 判断是不是1开头的数
  console.log(inum);
  // if (inum >= 10000000000 && inum < 20000000000) {
  // spError.innerHTML = '请输入1开头的数';
  // return;
  // }
  // spError.innerHTML = '你的电话号码是：' + inum;

  if (inum < 10000000000 || inum >= 20000000000) {
    spError.innerHTML = '输入的数是一开头';
    return;
  }
  spError.innerHTML = '你的电话是：' + inum;
});
