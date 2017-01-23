var li = document.createElement("li");
var a = document.createElement("a");
li.appendChild(a);
li.children[0].innerText = "STATS";

var nav = document.getElementById("partnersNav");
var navUl = nav.children[0];
var lastNavElem = navUl.children[4];
navUl.insertBefore(li, lastNavElem);