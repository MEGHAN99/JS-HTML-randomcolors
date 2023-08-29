const colors = ["green","blue","grey","red","orange","pink","purple"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){

const randomnumber = Math.floor(Math.random()*6);
document.body.style.backgroundColor=colors[randomnumber];




})