var xhttp = new XMLHttpRequest();
xhttp.open("GET", "log.xml", false);
xhttp.send();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    }
};

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
}

for(i = 0; i <= xmlDoc.getElementsByTagName('root').length; i++){
	$('#chargers tbody').append('<td>'+xmlDoc.getElementsByTagName('entry'[i]));
}

function update(){
	
}
