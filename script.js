var xhttp = new XMLHttpRequest();
xhttp.open("GET", "log.xml", false);
xhttp.send();
xhttp.onreadystatechange = function() {
    
    myFunction(this);
    
};

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
}

for(i = 0; i <= xmlDoc.getElementsByTagName('root').length; i++){
	$('#chargers tbody').append('<td>'+xmlDoc.getElementsByTagName('entry'[i]));
}

function update(){
	
}
