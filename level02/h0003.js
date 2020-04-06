console.log('进入js');
// 获取元素
var txt = document.getElementById('txt');
var btnOK = document.getElementById('btnOK');
var btnOK2 = document.getElementById('btnOK2');
var btnOK3 = document.getElementById('btnOK3');
var spInfo = document.getElementById('spInfo');
console.log(txt, btnOK, btnOK2, btnOK3, spInfo);
// 获取元素的属性 元素.getAttribute('属性名称')
var attr = txt.getAttribute('id');
console.log(attr);
attr = txt.getAttribute('placeholder');
console.log(attr);
attr = txt.getAttribute('class');
console.log('class', attr);
//判断输入是不是8-20 方法一
btnOK.addEventListener('click', function() {
  console.log('确定按钮点击');
  var useername = txt.value;
  useername = useername.replace(/\s/g, '');
  console.log('用户名', useername);
  if (useername.length < 8) {
    spInfo.innerHTML = '长度不能小于8';
    txt.focus();
    return;
  }
  if (useername.length > 20) {
    spInfo.innerHTML = '长度不能大于20';
    txt.focus();
    return;
  }
  spInfo.innerHTML = '';
});
// 方法二
btnOK2.addEventListener('click', function() {
  console.log('确定2点击');
  useername = txt.value.replace(/\s/g, '');
  // 逻辑或用||表示
  // a||b只要一个为true,结果就是真
  if (useername.length < 8 || useername > 20) {
    spInfo.innerHTML = '长度要在8-20之间';
    txt.focus();
    return;
  }
  spInfo.innerHTML = '';
});
// 方法三c
// if elseif else这个是阶梯式判断
// if（逻辑表达1）{逻辑表达式1为真要执行的代码}
// else if（逻辑表达2）{逻辑表达式2为真要执行的代码}
// .。。。。
// else{所有上面的表达式都不为真就执行这里面的代码}
// 阶梯判断是从上到下依次判断，任何一级判断为true,后面都不执行了
btnOK3.addEventListener('click', function() {
  console.log('确定3点击');
  var useername = txt.value.replace(/\s/g, '');
  if (useername.length < 8) {
    spInfo.innerHTML = '长度小于8';
    txt.focus();
  } else if (useername.length > 20) {
    spInfo.innerHTML = '长度大于20';
    txt.focus();
  } else {
    spInfo.innerHTML = '';
  }
});

// 切换文本框特效=====================================================
var divInput = document.getElementById('divInput');
var btn2 = document.getElementById('btn2');
var txtNum = document.getElementById('txtNum');
var spNum = document.getElementById('spNum');
console.log(divInput, btn2, txtNum, spNum);
var count = 0;
btn2.addEventListener('click', function() {
  // ================================================================
  console.log('切换样式');
  count = count + 1;
  if (count % 2 == 1) {
    divInput.setAttribute('class', 'form-input error');
  } else {
    divInput.setAttribute('class', 'form-input');
  }
  // ===============================================================
  var num = txtNum.value.replace(/\s/g, '');
  console.log('输入的数是：', num);
  var fnum = parseFloat(num); //转换成数（可以是小数）
  var inum = parseInt(num); //转化成整数
  console.log(fnum, inum);
  // 输入的是数且转换成小数的结果和整数的结果一样才是整数输入
  if (isNaN(fnum)) {
    spNum.innerHTML = '奇怪的数入又来了';
    return;
  }
  spNum.innerHTML = '';
  // > < == != ! || >= <= not and && or ||
  if (fnum == inum) {
    spNum.innerHTML = inum + '是整数！';
    // 区间判断 && 100<=inum<=200
    if (inum >= 100 && inum <= 200) {
      spNum.innerHTML = '奇怪的整数出现了';
    }
  } else {
    spNum.innerHTML = fnum + '是小数！';
  }
});
