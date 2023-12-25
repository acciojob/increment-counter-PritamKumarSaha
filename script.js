//your JS code here. If required.
const para = document.getElementById("counter");
const btn = document.getElmentById("incrementBtn")
btn.addEventListener("click",function(){
	let count = Number(para.innerText);
	alert(count);
	para.innerText = ++count;
}