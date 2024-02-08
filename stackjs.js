var poped2 = "";
var poped1="";
class twoStacks
{
	constructor(n)
	{
		this.arr = new Array(n);
		this.size = n;
		this.top1 = Math.floor(n / 2) ;
		this.top2 = Math.floor(n / 2) - 1;		
	}
push1(x)
{
	if (this.top1 > 0)
	{
	this.top1--;
	this.arr[this.top1] = x;
	document.getElementById("left-door"+(this.top1)).style.transform = "rotateY(-140deg)";
	document.getElementById("right-door"+(this.top1)).style.transform = "rotateY(140deg)";
	document.getElementById("out"+(this.top1)).innerHTML= x;
	}
	else
	{
	if (this.top2<this.size - 1){
		document.getElementById("out").innerHTML="overflow, stack 2";
		this.top2++;
		this.arr[this.top2] = x;
		document.getElementById("left-door"+(this.top2)).style.transform = "rotateY(-140deg)";
		document.getElementById("right-door"+(this.top2)).style.transform = "rotateY(140deg)";
		document.getElementById("out"+(this.top2)).innerHTML= x;
	}
	else{
		document.getElementById("out").innerHTML="whole array is full";
	}
	}
}
push2(x)
{
	
	if (this.top2 < this.size - 1)
	{
	this.top2++;
	this.arr[this.top2] = x;
	document.getElementById("left-door"+(this.top2)).style.transform = "rotateY(-140deg)";
	document.getElementById("right-door"+(this.top2)).style.transform = "rotateY(140deg)";
	document.getElementById("out"+(this.top2)).innerHTML= x;
	}
	else
	{
	if (this.top1 > 0){
		document.getElementById("out").innerHTML="overflow, stack 1";
		this.top1--;
		this.arr[this.top1] = x;
		document.getElementById("left-door"+(this.top1)).style.transform = "rotateY(-140deg)";
		document.getElementById("right-door"+(this.top1)).style.transform = "rotateY(140deg)";
		document.getElementById("out"+(this.top1)).innerHTML= x;
	}
	else{
		document.getElementById("out").innerHTML="whole array is full";
	}
	}
}
pop1()
{
	if (this.top1 <= (this.size / 2) -1)
	{
	let x = this.arr[this.top1];
	this.top1++;
	poped1 += x + " ";
	document.getElementById("out").innerHTML = poped1;
	document.getElementById("left-door"+(this.top1-1)).style.transform = "rotateY(0deg)";
	document.getElementById("right-door"+(this.top1-1)).style.transform = "rotateY(0deg)";
	}
	else
	{
	document.getElementById("out").innerHTML = "Underflow";
		
	}
	return 0;
}
pop2()
{
	if (this.top2 >= Math.floor(this.size / 2))
	{
	let y = this.arr[this.top2];
	this.top2--;
	poped2 += y +" ";
	document.getElementById("out").innerHTML = poped2;
	document.getElementById("left-door"+(this.top2+1)).style.transform = "rotateY(0deg)";
	document.getElementById("right-door"+(this.top2+1)).style.transform = "rotateY(0deg)";
	}
	else
	{
 	document.getElementById("out").innerHTML = "Underflow";
		
	}
}

peek1(){
	if (this.top1 <= (this.size-1) / 2){
		document.getElementById("out").innerHTML = this.arr[this.top1];
	}
	else{
		document.getElementById("out").innerHTML = "none";
	}
}

peek2(){
	if (this.top2 >= Math.floor(this.size / 2) + 1){
		document.getElementById("out").innerHTML = this.arr[this.top2];
	}
	else{
		document.getElementById("out").innerHTML = "none";
	}
	
}

isEmpty1(){
	if (this.top2 >= Math.floor(this.size / 2) + 1){
		document.getElementById("out").innerHTML = "false";
	}
	else{
		document.getElementById("out").innerHTML = "true";
	}
}

isEmpty2(){
	if (this.top2 >= Math.floor(this.size / 2) + 1){
		document.getElementById("out").innerHTML = "false";
	}
	else{
		document.getElementById("out").innerHTML = "true";
	}
}

}


let ts = new twoStacks(10);


function pop1(){
	ts.pop1()
}

function push1(){
	var input = document.getElementById("userInput").value;
	ts.push1(input)
}

function peek1(){
	ts.peek1()
}

function isEmpty1(){
	ts.isEmpty1()
}

function display1(){
	ts.printStack1()
}

function push2(){
	var input1 = document.getElementById("userInput1").value;
	ts.push2(input1)
}

function pop2(){
	ts.pop2()
}

function peek2(){
	ts.peek2()
}
function isempty2(){
	ts.isEmpty2()
}
function display1(){
	ts.printStack2()
}


