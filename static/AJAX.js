/* 封装ajax函数
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式，默认使用GET
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
function ajax(options){
	opt = options || {};
	var type = opt.type || 'GET';
	type = type.toUpperCase() || 'GET';
	var url = opt.url || '';
	var async = opt.async || true;
	var data = opt.data || null;
	var success = opt.success || function(){};
	var xmlhttp = null;
	var header = opt.headers || {};
	if (XMLHttpRequest) {
　　　　xmlHttp = new XMLHttpRequest();
　　}
　　else {
　　　　xmlHttp = new ActiveXObject('Microsoft.XMLHTTP'); //兼容IE的用法
　　}
　　var params = [];
　　for (var key in data){
　　　　params.push(key + '=' + data[key]); 
　　}
　　var dataStr = params.join('&');//将要发送的数据改变｛a:b,c:d｝变成 a=b&c=d
　　if (type === 'POST') {
　　　　xmlHttp.open(type, url, async);
	   //设定Content-Type头信息，模拟HTTP的POST方法发送一个表单
　　　　xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'); 
　　　　xmlHttp.send(dataStr);
　　}
　　else {
		xmlHttp.open(type, url + '?' + dataStr, async);
		for(var key in header){
			xmlHttp.setRequestHeader(key,header[key]);
		}
　　　　xmlHttp.send(null);
　　} 
　　xmlHttp.onreadystatechange = function () {  //当收到完整服务器的响应的时候，同时status为200时，触发成功的回调函数
　　　　if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
　　　　　　success(xmlHttp.responseText);
　　　　}
　　};
}	