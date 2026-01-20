const navBar=document.querySelector(".nav-bar");
const CharCont=document.querySelector(".second-container");
let count=0;
const interval=setInterval(function(){
	count++;
	if(count==1){
		navBar.style.background="red";
	CharCont.style.background="red";
	}
	if(count==2){
		navBar.style.background="#00bbf0";
		CharCont.style.background="#00bbf0";
	}
	if(count==3){
		navBar.style.background="#f96d00";
CharCont.style.background="#f96d00";
	}
	if(count==4){
		navBar.style.background="#f70776";
        CharCont.style.background="#f70776";
	}
	if(count==5){
		navBar.style.background="#f76b8a";
        CharCont.style.background="#f76b8a";
	}
	if(count==6){
		navBar.style.background="#8dc6ff";
        CharCont.style.background="#8dc6ff";
	}
	if(count==7){
		navBar.style.background="#42b883";
        CharCont.style.background="#42b883";
		count=0;
	}
	
	
	
},5000);


const width=screen.availWidth;
const  height=screen.availHeight;
console.log(width+" "+height);