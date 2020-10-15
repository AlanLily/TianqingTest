var lunbotu = document.getElementById("lunbotu");
var index = 0;
var timer = null;
var img_li = document.querySelectorAll(".tu ul li");
var xiaoquan = document.querySelectorAll(".xiaoquan ul li");
// console.log(img_li)
// console.log(xiaoquan)

document.getElementById("i-left").onclick = function(){
	index--;
	// console.log(index);
	if(index < 0){
		index = img_li.length - 1;
	}
	changeActive(index);
}

document.getElementById("i-right").onclick = function(){
	index++;
	if(index == img_li.length){
		index = 0;
	}
	changeActive(index);
}


function changeActive(index){
	for(var i = 0; i < img_li.length; i++){
		img_li[i].className = "";
		xiaoquan[i].className = "";
	}
	img_li[index].className = "active";
	xiaoquan[index].className = "active";
}

function changePicture(){
	index++;
	if(index >= img_li.length){
		index = 0;
	}
	changeActive(index);
}

timer = setInterval(changePicture, 2500);
lunbotu.onmouseover = function(){
	clearInterval(timer);
	timer = null;
}
lunbotu.onmouseleave = function(){
	timer = setInterval(changePicture, 2500);
}

for(var i = 0; i < img_li.length; i++){
	xiaoquan[i].index = i;
	xiaoquan[i].onclick = function(){
		index = this.index;
		// console.log(index);
		changeActive(index);
	}
}
