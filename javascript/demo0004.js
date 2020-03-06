console.log('进入demo0004.js');

document.getElementById('sp01').addEventListener('click', function() {
  // js修改元素的属性值
  // 元素.setAttr('属性的名称','属性的值')
  // 下面的代码表示将main的元素的class属性修改成style01
  document.getElementById('main').setAttribute('class', 'style01');
  // <开始标记 属性名称='属性的值' 属性1=“值”><结束标记>
  // <input type="passwod placeholser="请输入密码">
});

document.getElementById('sp02').addEventListener('click', function() {
  document.getElementById('main').setAttribute('class', 'style02');
});