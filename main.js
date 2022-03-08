var msg = document.getElementsByClassName("msg");
var load = document.getElementById("load");
var ellipse = document.getElementsByClassName("ellipse");
var pricing = document.getElementsByClassName("pricing");
var i = 0;
var repeat = 0;
var portion = 0.1;
var portion2 = 0.1;
var portion3 = 0.1;

while(i < msg.length)
{
	msg[i].style.opacity = "0";
	i++;
}
i = 0;
while (i < pricing.length)
{
	pricing[i].style.opacity = '0';
	i++;
}
i = 0;

function loading()
{
	var interval = setInterval(function () {
		ellipse[i].style.backgroundColor = "#989b9e";
		setTimeout(function () {
			ellipse[i].style.backgroundColor = "#abafb3";
		}, 2)
		ellipse[i].style.backgroundColor = "hsl(206, 6%, 79%)";
		i++;
		if (i === 3)
			i = 0;
		if (repeat === 5)
		{
			i = 0;
			repeat = 0;
			load.style.display = "none";
			clearInterval(interval);
		}
		repeat++;
	}, 300)
}

function displaying(j) {
	var interval2 = setInterval(function () {
		msg[j].style.opacity = portion;
		portion += 0.1;
		if (portion >= 1.1)
		{
			portion = 0.1;	
			clearInterval(interval2);
		}
	}, 50);
}

setTimeout(function () {
	loading();
	setTimeout(function () {
		displaying(0);
	}, 1700)
}, 100);

setTimeout(function () {
	load.style.display = "flex";
	loading();
	i = 0;
	setTimeout(function () {
		displaying(1);
	}, 1500)
}, 3000);

setTimeout(function() {
	displaying(2);
}, 6200)

setTimeout(function() {
	displaying(3);
}, 7200)

setTimeout(function() {
	displaying(4);
}, 8200)

setTimeout(function () {
	load.style.display = "flex";
	loading();
	i = 0;
	setTimeout(function () {
		displaying(5);
	}, 1500)
}, 8700);

setTimeout(function (){
	load.style.display = "flex";
	loading();
	i = 0;
	setTimeout(function () {
		var interval2 = setInterval(function () {
			pricing[0].style.opacity = portion2;
			portion2 += 0.1;
			if (portion2 >= 1.1)
			{
				portion2 = 0.1;	
				clearInterval(interval2);
			}
			console.log(portion2);
		}, 50)
		var interval3 = setInterval(function () {
			pricing[1].style.opacity = portion3;
			portion3 += 0.1;
			if (portion3 >= 1.1)
			{
				portion3 = 0.1;	
				clearInterval(interval3);
			}
			console.log(portion2);
		}, 50)
	}, 1500)
}, 11000)

