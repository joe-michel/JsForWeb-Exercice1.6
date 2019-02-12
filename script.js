
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

let images = [
	"chats/chat1.jpg",
	"chats/chat2.jpg",
	"chats/chat3.jpg",
	"chats/chat4.jpg",
	"chats/chat5.jpg",
	"chats/chat6.jpg",
	"chats/chat7.jpg",
	"chats/chat8.jpeg",
	"chats/chat9.jpeg",
	"chats/chat10.jpg",
	"chats/chat11.jpg",
	"chats/chat12.jpg"
];

function randomize(arr) {      
	let l = arr.length;
	let temp;
	let index;  
	while (l > 0) {  
		index = Math.floor(Math.random() * l);  
		l--;  
		temp = arr[l];          
		arr[l] = arr[index];          
		arr[index] = temp;
	}    
}

function showImg(arr){
	for (let i = 0; i < arr.length; i++) {
		let x = document.createElement("IMG");
  		x.setAttribute("src", arr[i]);
  		x.setAttribute("width", "100");
  		x.setAttribute("height", "100");
  		document.querySelector(".images").appendChild(x);
	}
}


randomize(images);
showImg(images);

document.querySelector(".randomize").addEventListener("click", () => {
	document.querySelector(".images").innerText = "";
	randomize(images);
	showImg(images);
});