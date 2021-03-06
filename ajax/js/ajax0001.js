console.log('进入ajax0001.js');
// 校验ajax是否导入
console.log('axios:', axios);
// 校验Qs是否导入
console.log('qs:', Qs);
// 服务器api接口访问地址
var serviceBaseUrl = 'https://huhuiyu.cn/teach-ajax-demo';
// 本地保存token信息的key
var serviceTokenKey = 'service.token';

// 接口文档中的POST，GET表示接口的访问类型
// path就是接口访问url地址
// axios访问后端api接口 maethod参数就是接口访问类型
// heaers用于传递Parameter Type为heaer的参数
// token参数就是heaer
var promise = axios({
  method: 'post',
  url: serviceBaseUrl + '/',
  heaers: {
    token: localStorage.getItem(serviceTokenKey),
  },
});
// Promise对象如果正确应答回来会调用then方法,回来的方法参数是服务器应答的结果
promise.then(function (resp) {
  // 服务器的应答数据在data属性中
  console.log(resp.data);
  // token是服务器追踪用户的凭证，一定要保存好
  // 如果服务器端有返回token，需要保存下来
  if (resp.data.token) {
    localStorage.setItem(serviceTokenKey, resp.data.token);
  }
});

//移除完整的ajax请求
var txtEcho = document.getElementById('txtEcho');
var btnEcho = document.getElementById('btnEcho');
var spEcho = document.getElementById('spEcho');

btnEcho.addEventListener('click', function () {
  promise = axios({
    method: 'post',
    url: serviceBaseUrl + '/',
    heaers: {
      token: localStorage.getItem(serviceTokenKey),
    },
    data: 'echo=' + txtEcho.value
  });
  promise.then(function (resp) {
    if (resp.data.token) {
      localStorage.setItem(serviceTokenKey, resp.data.token);
    }
    // JSON.stringify是将json对象转换成字符串
    spEcho.innerHTML = JSON.stringify(resp.data);
  });
});
