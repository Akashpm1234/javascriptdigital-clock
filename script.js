  var d,h,m,s,clock,colors,time,t;
 
d= new Date();
h=d.getHours();
m=d.getMinutes();
s=d.getSeconds();
t=d.toLocaleTimeString();
function clocky(){
	
	if(h<9){
		h=0+'h';
	}
		
	if(m<9){
		m=0+'m';
	}
		
	if(s<9){
		s=0+'s';
	}
	
	clock= h + ":" + m + ":" + s ;
	
	colors= '#' + h +m + s;
	
	

	
	 document.getElementById("demo").innerHTML = clock;
	


	document.body.style.backgroundColor=colors;
	
}


clocky();