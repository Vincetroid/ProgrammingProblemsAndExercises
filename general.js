document.onload = function(){
	document.getElementById("pagination").innerHTML = '<button onclick="changePage('<')"><</button><button onclick="changePage('>')">></button>';
}

function changePage(arrow){
	if(arrow === '<'){
		var url = window.location.href;
		//extraer numero string de url
		var numStr = url.substr(56,1);
		// convertir a numero y disminuirle
		var num = Number(numStr);
		num--;
		// nueva url a numero anterior
		var res = url.replace(numStr,num.toString());
		//ir a nuevo url
		window.location.href = res; 
	}

	if(arrow === '>'){
		var url = window.location.href;
		//extraer numero string de url
		var numStr = url.substr(56,1);
		// convertir a numero y disminuirle
		var num = Number(numStr);
		num++;
		// nueva url a numero anterior
		var res = url.replace(numStr,num.toString());
		//ir a nuevo url
		window.location.href = res; 
	}
}