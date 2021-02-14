
function sum(){
	var d1=document.getElementById("t1").value;
	var d2=document.getElementById("t2").value;
	var res=parseInt(d1)-parseInt(d2);
	var mo=Math.pow(Math.cos(res),2);
	document.getElementById("t3").value=mo;
}
function left_min(){
	var A= parseInt(document.getElementById("t1").value);
	if (A<=-180) {
		alert("Angle should be in between of +180 to -180");
	}else{
		var B= parseInt(A-10);
		B = B<-180?-180:B;
		document.getElementById("t1").value=B;
		// alert("gvhb");
		document.getElementById("myCanvas1").style.transform = "rotate("+B+"deg)";
		// alert("ggbfhvbhsvbhs");
	}
	sum();
}
function left_plu(){
	var A= parseInt(document.getElementById("t1").value); 
	if (A>=180) {
		alert("Angle should be in between of +180 to -180");
	}else{
		var B= parseInt(A+10);
		B = B>180?180:B;
		document.getElementById("t1").value=B;
		document.getElementById("myCanvas1").style.transform = "rotate("+B+"deg)";
	}
	sum();
}
function right_min(){
	var A= parseInt(document.getElementById("t2").value);
	if (A<=-180) {
		alert("Angle should be in between of +180 to -180");
	}else{
		var B= parseInt(A-10);
		B = B<-180?-180:B;
		document.getElementById("t2").value=B;
		document.getElementById("myCanvas2").style.transform = "rotate("+B+"deg)";
	}
	sum();

}
function right_plu(){
	var A= parseInt(document.getElementById("t2").value);
	if (A>=180) {
		alert("Angle should be in between of +180 to -180");
	}else{
		var B= parseInt(A+10);
		B = B>180?180:B;
		document.getElementById("t2").value=B;
		document.getElementById("myCanvas2").style.transform = "rotate("+B+"deg)";
	}
	sum();

}



function drawGraph() {
document.getElementById("l1").style.display="block";
var datapoints1 = [];
	for (let i = 1; i <= 5; i++) {
		    var tx = document.getElementById("d"+i).value;
		    var ty = document.getElementById("f"+i).value;
		    datapoints1.push({ x: parseInt(tx), y: parseInt(ty) });
		    graphline("l1", datapoints1, "COS² θ;", "I/I(0);");
    }
}
