console.log('进入js');
var divInfo = document.getElementById('divInfo');
// 本地存储和那个页面保存无关，是网站位单位
divInfo.innerHTML =
  localStorage.getItem('info') + '<br>' + sessionStorage.getItem('sinfo');
