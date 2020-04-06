console.log('进入js');
// 获取页面元素
var txtPwd = document.getElementById('txtPwd');
var btnok = document.getElementById('btnok');
var divInfo = document.getElementById('divInfo');
// radio一组互斥
var rdo = document.getElementById('rdo');
var rdoNian = document.getElementById('rdoNian');
var rdoYJ = document.getElementById('rdoYJ');

console.log(txtPwd, btnok, divInfo, rdo, rdoNian, rdoYJ);

btnok.addEventListener('click', function() {
  console.log('点击确定事件');
  divInfo.innerHTML = '输入密码:' + txtPwd.value;
  // 判断开卡的模式（radio互斥效果的判断）
  var mode = '';
  // radio的checked属性只有真假二态，选中时为true
  if (rdo.checked) {
    mode = rdo.value;
  }
  if (rdoNian.checked) {
    mode = rdoNian.value;
  }
  if (rdoYJ.checked) {
    mode = rdoYJ.value;
  }
  divInfo.innerHTML = '<br>开卡模式是：' + mode;
});

var chkShow = document.getElementById('chkShow');
var spShow = document.getElementById('spShow');

chkShow.addEventListener('click', function() {
  if (chkShow.checked) {
    // 如果是选择中状况就显示spShow
    spShow.style.display = 'inline';
  } else {
    spShow.style.display = 'none';
  }
});
