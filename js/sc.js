var btn = document.getElementById('convert');

btn.addEventListener('click',function(){
var str = document.getElementById('txtarea').value;
console.log(str.length);
var jso=[];
for (var i = 0 ;i < str.length ;i++){
jso.push(str.charCodeAt(i));
 }
 jso="document.documentElement.innerHTML=String.fromCharCode("+jso+")";
 document.getElementById('output').value=jso;
});
