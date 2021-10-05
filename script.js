var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	console.log(xhttp.readyState + ' '+ xhttp.status);
if (xhttp.readyState == 4 && xhttp.status == 200) {

    var xmlDoc = xml.responseXML;
}
xhttp.open("GET", "log.xml", true);
xhttp.send();
}
for(i = 0; i <= xmlDoc.getElementsByTagName('root').length; i++){
	$('#chargers tbody').append('<td>'+xmlDoc.getElementsByTagName('entry'[i]));
}

function update(){
	
}
