console.log('执行js');
// chkbox======================================================================
var ah01 = document.getElementById('ah01');
var ah02 = document.getElementById('ah02');
var ah03 = document.getElementById('ah03');
var ah04 = document.getElementById('ah04');
var btnOK = document.getElementById('btnOK');
var spInfo = document.getElementById('spInfo');
var chkxy = document.getElementById('chkxy');

console.log(ah01, ah02, ah03, ah04, btnOK, spInfo, chkxy);

btnOK.addEventListener('click', function() {
  console.log('点击确认按钮');
  if (!chkxy.checked) {
    spInfo.innerHTML = '必须同意用户隐私协议';
    return;
  }

  var ah = '你的爱好有：';
  if (ah01.checked) {
    ah += ah01.value + ',';
  }
  if (ah02.checked) {
    ah += ah02.value + ',';
  }
  if (ah03.checked) {
    ah += ah03.value + ',';
  }
  if (ah04.checked) {
    ah += ah04.value + ',';
  }
   // 如果不是初始值，表示有选择爱好
  if (ah != '你的爱好有：') {
  //  substr时字符串对象的特有方法，获取字符串的一部分
  // substr（开始索引，长度）
    ah = ah.substr(0, ah.length - 1);
  }
  spInfo.innerHTML = ah;
});
// ===================================================================================
var xb = document.getElementById('xb');
console.log(xb);
xb.addEventListener('click', function() {
  spInfo.innerHTML = '性别是：' + xb.value;
});
